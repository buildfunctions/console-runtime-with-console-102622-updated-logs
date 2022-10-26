import mongoose from 'mongoose'

const DemoSchema = new mongoose.Schema({
  function_value: {
    type: String
  },
  function_name: {
    type: String
  },
  user_username: {
    type: String
  },
  nickname: {
    type: String
  },
  username: {
    type: String
  },
  tenant: {
    type: String
  },
  email: {
    type: String
  }
})

export default mongoose.models.Demo || mongoose.model('Demo', DemoSchema)