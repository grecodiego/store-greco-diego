import {useState} from "react"

const useModal = (initialValue = false) => {
    const [isOpen,setIsOpen] = useState(initialValue);
    function openModal() {setIsOpen(true)}
    function closeModal() {setIsOpen(false)}    
    return [isOpen,openModal,closeModal]
}

export default useModal