import AuthForm from './AuthForm.jsx';
import {Dialog, DialogContent} from "@mui/material";
import {useLoginUserMutation} from "../../redux/api/authApi.js";
import {useSelector, useDispatch} from "react-redux";
import {toggleOpen} from "../../redux/slices/dialogSlice.js";
import {useNavigate} from "react-router-dom";
import routeNames from "../../router/routeNames.js";

const AuthorizationPopup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const isOpen = useSelector(state => state.dialog.isOpen);


  const handleSubmit = async (values) => {
    try {
      await loginUser(values).unwrap();
      dispatch(toggleOpen())
      navigate(routeNames.checkoutPage);
    } catch (error) {
      console.error(error);
    }
  }

  return (
      <Dialog fullWidth open={isOpen}>
        <DialogContent>
          <AuthForm onSubmit={handleSubmit}/>
        </DialogContent>
      </Dialog>
  )
}

export default AuthorizationPopup;