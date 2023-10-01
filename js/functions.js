const app = new Vue({
    el: '#app',
    data: {
        titulo: "Notas",
        categoria: '',
        notas: [],
        nuevaNota: '',
        edicionNota: {},
    },
    methods:{
        agregarNota: function() {
            this.notas.push({
                nota: this.nuevaNota,
                categoria: this.categoria,
            });
            this.nuevaNota = '';
            localStorage.setItem('notas-baobab', JSON.stringify(this.notas));
        },
        borrarNota: function(index) {
            this.notas.splice(index, 1);
            localStorage.setItem('notas-baobab', JSON.stringify(this.notas));
        },
        openModal(nota) {
            document.getElementById("myModal").style.display = "block";
            this.edicionNota = nota;

        },
        closeModal() {
            document.getElementById("myModal").style.display = "none";
        },
        editarNota() {
            localStorage.setItem('notas-baobab', JSON.stringify(this.notas));
        },

    },
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('notas-baobab'));
        // Carga los datos de localStorage si no estan vacios
        if (!datosDB) {
            this.notas = [];
        } else {
            this.notas = datosDB;
        }
        // Cierra el modal si el usuario hace clic fuera de él
        window.onclick = function (event) {
            var modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    },
})