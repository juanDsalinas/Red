"use client";

/* When we're importing the dependencies we change the "from" to adapt for the "alias" 
what we definited before in the configuration od the project and add packages for go to on the 
file */
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => {
    const onChange = (open:boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>    
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>    
                <div>
                    {children}
                </div>
            </DialogContent>           
        </Dialog>
    )

}