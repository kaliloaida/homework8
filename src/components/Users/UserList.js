import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./UserList.module.css";
import ErrorModal from "../UI/ErrorModal";

const UserList = (props) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const showHandler = (event) => {
    setData(props.users.filter((element) => element.id != event.target.id));
    setError({
      title: "DELETE  USER",
      message: "Do you  want to delete this?",
    });
  };

  const deleteHandler = () => {
    props.getData(data);
    setError(null);
  };

  const ErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={deleteHandler}
        >
          <Button onClick={ErrorHandler}>Cancel</Button>
        </ErrorModal>
      )}

      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
              <Button onClick={showHandler} id={user.id}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};
export default UserList;
