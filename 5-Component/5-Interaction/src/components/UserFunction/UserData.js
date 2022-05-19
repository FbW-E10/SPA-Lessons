function UserData(props) {
  return (
    <>
      <h4>User Date:</h4>
      <div>
        User Name: <span className="text-red">{props.user.name}</span>
      </div>
      <div>
        User Email:<span className="text-red">{props.user.email}</span>
      </div>
      <div>
        User Address:<span className="text-red">{props.user.address}</span>
      </div>
    </>
  );
}

export default UserData;
