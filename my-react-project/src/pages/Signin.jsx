import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../hooks/useStorage";

const Signin = () => {
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useLocalStorage("user", {});

    const onSubmit = async (formData) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/signin`, formData);
            setUser(data);
        } catch (error) {
            console.log("error", error.response.data);
        }
    };
    return (
        <div>
            {JSON.stringify(user)}
            <h2>Đăng nhập</h2>
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
                <button>đăng nhập</button>
            </form>
        </div>
    );
};

export default Signin;
