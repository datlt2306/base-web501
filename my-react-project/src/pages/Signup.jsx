import axios from "axios";
import { useForm } from "react-hook-form";

const Signup = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`http://localhost:3000/signup`, data);
            console.log(response);
        } catch (error) {
            console.log("error", error);
        }
    };
    return (
        <div>
            <h2>Đăng ký</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    {...register("email")}
                    className="border-2"
                    placeholder="Email"
                />
                <input
                    type="password"
                    {...register("password")}
                    className="border-2"
                    placeholder="Password"
                />
                <button>đăng ký</button>
            </form>
        </div>
    );
};

export default Signup;
