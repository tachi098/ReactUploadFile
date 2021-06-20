import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { UserCreator } from "./../state";
import { bindActionCreators } from "redux";
import { useEffect } from "react";

const UserList = () => {

    // const history = useHistory();
    const dispatch = useDispatch();
    const { fetchUser } = bindActionCreators(UserCreator, dispatch);
    const users = useSelector(state => state.user);



    const useEffectDidmout = () => useEffect(() => {
            fetchUser();
    }, []);

    useEffectDidmout();

    return (
            <div className="col-md-12">
                <h1>Employee list</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td><img src={user.url} alt="" height={200} /></td>
                                    <td>
                                        <button className="btn btn-danger ml-2">Delete</button>
                                        <button className="btn btn-warning">Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    );
}

export default UserList;