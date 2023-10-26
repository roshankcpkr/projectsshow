
function enableBlockResizing() {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach((block) => {
        block.setAttribute('contenteditable', 'true');

        block.addEventListener('input', () => {
            block.style.width = block.scrollWidth + 'px';
        });
    });
}


function enableBlockDragging() {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach((block) => {
        block.draggable = true;

        block.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', block.id);
        });

        block.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        block.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedBlockId = e.dataTransfer.getData('text/plain');
            const draggedBlock = document.getElementById(draggedBlockId);

            if (draggedBlock && draggedBlock !== block) {
                const temp = { ...block.style };
                block.style.cssText = draggedBlock.style.cssText;
                draggedBlock.style.cssText = temp.cssText;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    enableBlockResizing();
    enableBlockDragging();
});
