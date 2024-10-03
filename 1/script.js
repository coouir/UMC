// script.js
document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let inputField = document.getElementById('todo-input');
        let inputValue = inputField.value;

        if (inputValue.trim() !== "") {
            let todoList = document.getElementById('todo-list');
            let newTask = document.createElement('li');
            
            // 텍스트 추가
            let taskText = document.createElement('span');
            taskText.textContent = inputValue;

            // 완료 버튼 생성
            let completeButton = document.createElement('button');
            completeButton.textContent = "완료";

            // 완료 버튼 클릭 시 "해낸 일"로 이동
            completeButton.addEventListener('click', function() {
                let doneList = document.getElementById('done-list');
                newTask.removeChild(completeButton); // 완료 버튼 삭제

                // 삭제 버튼 생성
                let deleteButton = document.createElement('button');
                deleteButton.textContent = "삭제";
                deleteButton.classList.add('delete-btn');

                // 삭제 버튼 클릭 시 항목 삭제
                deleteButton.addEventListener('click', function() {
                    doneList.removeChild(newTask);
                });

                newTask.appendChild(deleteButton); // 해낸 일에 삭제 버튼 추가
                doneList.appendChild(newTask); // 해낸 일 리스트로 이동
            });

            // 할 일 항목에 텍스트와 버튼 추가
            newTask.appendChild(taskText);
            newTask.appendChild(completeButton);

            todoList.appendChild(newTask); // 해야 할 일 리스트에 추가
            inputField.value = ""; // 텍스트 박스 비우기
        }
    }
});
