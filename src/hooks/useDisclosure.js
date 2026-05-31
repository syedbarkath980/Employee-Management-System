import { useCallback, useState } from "react";

const useDisclosure = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return { isOpen, toggle, setIsOpen };
};

export default useDisclosure;
