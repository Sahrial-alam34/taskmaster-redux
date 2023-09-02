import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";


const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit,reset } = useForm();

    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel()
    }

    const onCancel = ()=>{
        reset();
        setIsOpen(false)
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3">
                    <label htmlFor="title">Title</label>
                    <input className="w-full rounded-md" type="text" id="title" {...register('name')}></input>
                </div>
                <button onClick={()=>onCancel()} type="button">Cancel</button>
                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;