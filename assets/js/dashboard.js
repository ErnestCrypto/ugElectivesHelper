let sidebar = document.querySelector(".sidebar");
        let closeBtn = document.querySelector("#btn");

        closeBtn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
            menuBtnChange();
            
        });

      

        function menuBtnChange() {
            if (sidebar.classList.contains("open")) {
                closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            } else {
                closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
            }
        }




function myFetch(){
fetch('https://script.google.com/macros/s/AKfycbxFFRClszD6kDkemH0rZ2yiuQw-k8KMYAcbCGnXi9xiaSlBMRALrwKWxGcgZIi6B4Jb/exec')
.then(response => response.json())
.then(data  => {
    let index = data.content.length - 1
    let arr = data.content[index]
     $('.name').text(arr[0]);
})
}

myFetch();




function messagesFetch(){
fetch('https://script.google.com/macros/s/AKfycbyik6zXdy9dvdsuw-GDJ0ThPoe_sOsy5yxeZN5qw6xw1yid9cyjH_xCalhHJOjwZSRH/exec')
.then(response => response.json())
.then(data  => {
    let index = data.content.length - 1
     

     for(i = 1; i<data.content.length;i++){
            let arr = data.content[i]
       $(` <div class="message_content">
<div class="row">
    <div class="col-sm-1 text-center pic ">
        <img src="assets/img/profile-picture-circle-hd.png" alt="pic">
    </div>
    <div class="col-sm-10 ">
        <p id = "messagesName" >${arr[0]}</p>
        <p id = "messagesContent">${arr[2]}</p>
    </div>
    <div class="col-sm-1 time ">
        <p class="col-sm-12" id = "reply">reply</p>
       
    </div>
</div>
            </div>`).appendTo('.message_container');
                 console.log(arr);

     }
// $('#messagesName').text(arr[0]);
//      $('#messagesContent').text(arr[2]);



})
}

messagesFetch()

  for(x=0; x<9;x++) {
            var board = document.createElement('div');
            board.className = "blah";
            document.getElementById('board').appendChild(board);
            }