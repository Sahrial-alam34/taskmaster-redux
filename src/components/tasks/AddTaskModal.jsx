import Modal from "../ui/Modal";


const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia distinctio similique. Voluptatem voluptas esse assumenda alias cupiditate optio ad, vero, harum fugiat totam, amet omnis ipsum eaque numquam? Asperiores at fugiat ut ipsa accusantium quidem eos? Voluptate saepe, animi maxime consequatur dolor labore aperiam, non, possimus sunt ea soluta repellendus totam a sapiente deserunt quaerat! Maiores suscipit expedita possimus. Illum quaerat eveniet, laboriosam, exercitationem consequuntur consequatur reprehenderit totam magni dignissimos harum dicta. Eaque in neque rem! Voluptate harum perspiciatis architecto provident dolorum. Atque voluptates iusto repellat aliquid nisi minima beatae molestiae fugit minus. Beatae ipsum odit eum consequatur earum!</p>
        </Modal>
    );
};

export default AddTaskModal;