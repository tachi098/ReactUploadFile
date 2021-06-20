import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { UserCreator } from "./../state";
import userModel from "./../models/userModel";
import * as Yup from "yup";
import { GoogleMap } from "./../common/GoogleMap"

const AddUser = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { createUser } = bindActionCreators(UserCreator, dispatch)

    
    const formik = useFormik({
        initialValues: userModel,
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            multipartFile: Yup.mixed().required('A file is required')
                // .test('fileSize', "File Size is too large", (value) => value === null || (value && value.size <= 1048576))
        }),
        onSubmit: async values => {
            await createUser(values);
            // history.push("/");
            // console.log(values);
        }
    });

    return (
        <div className="col-md-8">
            <h1>Create new employee</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" name="name" onChange={formik.handleChange} />
                    {formik.errors.name && formik.touched.name && (
                        <span><p style={{ color: "red" }}>{formik.errors.name}</p></span>
                    )}
                </div>

                <div className="form-group">
                    <label>Image:</label>
                    <input type="file" multiple
                        className="form-control"
                        // value={formik.values.multipartFile || ""}
                        name="multipartFile"
                        onChange={(event) => {
                            formik.setFieldValue("multipartFile", event.currentTarget.files);
                        }}
                    />
                    {
                        formik.errors.multipartFile && formik.touched.multipartFile && (
                            <p style={{ color: "red" }}>{formik.errors.multipartFile}</p>
                        )
                    }
                </div>

                <button type="submit" className="btn btn-primary mt-2 me-2">Save</button>
                <button type="button" onClick={() => { history.push("/") }} className="btn btn-warning mt-2">Back</button>
            </form>
                    <GoogleMap/>
        </div>
    )
}

export default AddUser;