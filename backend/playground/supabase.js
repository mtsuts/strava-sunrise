const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()


const supabaseUrl = 'https://dhgwzrqxrbgrngknrqzk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZ3d6cnF4cmJncm5na25ycXprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2ODM4MDIsImV4cCI6MjA0MjI1OTgwMn0.QrdiBFSBpL8ET8B4MeCTN2jmOIaduVtUT5_EwKbRQAY'
const supabase = createClient(supabaseUrl, supabaseKey)


const users = [{
  name: 'Mariam',
  email: 'mariam@gmail.com'
},
]

const addUser = async () => {
  const { data, error } = await supabase
    .from('users')
    .insert(
      users
    );
}

const getUsers = async () => {
  const { data, error } = await supabase
    .from('users')
    .select()
  console.log(data)
}


addUser()
getUsers()