import { useForm } from "react-hook-form";
function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", { required: true, minLength: 3 })} />
                {errors.name && errors.name.type == "required" && <span>Bắt buộc phải nhập</span>}
                {errors.name && errors.name.type == "minLength" && (
                    <span>Bắt buộc phải nhập ít nhất 3 ký tự</span>
                )}
                <input
                    type="text"
                    {...register("price", {
                        required: true,
                        validate: (value) => !isNaN(value),
                    })}
                />
                {errors.price && errors.price.type == "required" && <span>Bắt buộc phải nhập</span>}
                {errors.price && errors.price.type == "validate" && (
                    <span>Bắt buộc phải là số</span>
                )}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;