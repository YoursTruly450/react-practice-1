import React from 'react';

import classes from  './UsersList.module.css';
import Card from '../UI/Card';

const UsersList = props => {

  let content = (
    <ul>
      {
        props.users.map(user => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))
      }
    </ul>
  )

  if (props.users.length === 0) {
    content = <label>
      No users found
    </label>
  }

  return (
    <Card className={classes.users}>
      {content}
    </Card>
  )

}

export default UsersList;