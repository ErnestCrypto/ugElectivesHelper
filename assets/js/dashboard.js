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




// $('.message_container').on('click','.reply',()=>{
// console.log($('.reply').val())
// })





