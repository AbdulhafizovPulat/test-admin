import { useState } from 'react';
import {
    Button,
    Confirm,
    useRecordContext,
    useDelete,
} from 'react-admin';

const BulkResetViewsButton = () => {
    const record = useRecordContext();
    const [open, setOpen] = useState(false);

    const [remove, { isLoading }] = useDelete(
        'posts',
        { id: record && record.id }
    );

    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);
    const handleConfirm = () => {
        remove();
        setOpen(false);
    };

    return (
        <>
            <Button label="Delete" onClick={handleClick} />
            <Confirm
                isOpen={open}
                loading={isLoading}
                title={`Delete post #${record && record.id}`}
                content="Are you sure you want to delete this item?"
                onConfirm={handleConfirm}
                onClose={handleDialogClose}
            />
        </>
    );
};