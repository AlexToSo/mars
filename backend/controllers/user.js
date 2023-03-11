const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/**
 * Adds a new user to database
 * @param { Object } req
 * @param { Object } res
 * @param { Method } next
 */
exports.signup = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10)
    await mysql.query(
      'INSERT INTO users (`name`, `surname`, `mail`, `address`, `password`) VALUES (?, ?, ?, ?, ?);',
      [req.body.name, req.body.surname, req.body.mail, req.body.address, hash]
    )
    res.status(201).json({ message: 'New user created!' })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

/**
 * Gets an user token from database
 * @param { Object } req
 * @param { Object } res
 * @param { Method } next
 */
exports.login = async (req, res, next) => {
  try {
    const [user, user_fields] = await mysql.query(
      'SELECT * FROM users WHERE mail = ?;',
      [req.body.mail]
    )
    if (!user[0]) return res.status(401).json({ error: 'User not found!' })
    // Otherwise, compares entered and database password
    const valid = await bcrypt.compare(req.body.password, user[0].password)

    if (!valid) return res.status(401).json({ error: 'Wrong password!' })
    const user_id = user[0].id

    // Otherwise, sends authentification information
    res.status(200).json({
      user_id: user_id,
      token: jwt.sign({ user_id: user_id }, process.env.APP_SECRET, {
        expiresIn: '24h',
      }),
    })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
