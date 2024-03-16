const AWS = require('aws-sdk')

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider()

const userPoolId = 'YOUR_USER_POOL_ID'
const clientId = 'YOUR_CLIENT_ID'

const validateUser = async (req, res, next) => {
  const { userId, userPoolGroup } = req.body

  const params = {
    UserPoolId: userPoolId,
    Username: userId,
  }

  // Validate the user ID
  try {
    await cognitoIdentityServiceProvider.adminGetUser(params).promise()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid user ID' })
  }

  // Validate the user pool group
  try {
    const groups = await cognitoIdentityServiceProvider
      .adminListGroupsForUser(params)
      .promise()

    if (!groups.Groups.includes(userPoolGroup)) {
      return res.status(401).json({ error: 'Invalid user pool group' })
    }
    // return res.status(201).json({ error: 'Valid user pool group!!!' })
  } catch (error) {
    return res.status(401).json({ error: 'Invalid user pool group' })
  }

  next()
}

module.exports = validateUser
