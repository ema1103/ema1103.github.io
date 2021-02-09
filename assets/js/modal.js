class Modal {

    static instance;

    constructor() {
        /*SINGLETON*/
        if (Modal.instance) {
            return Modal.instance;
        }

        Modal.instance = this;

        /*MODAL CONTROL*/
        this.body = document.getElementsByTagName('body')[0];
        this.modal = document.getElementById('modal');
        this.modalContainer = document.getElementById('modalContainer');
        this.modalCloseButton = document.getElementById('modalCloseButton');

        this.modal.onclick = e => {
            e.stopPropagation();
        }

        this.modalContainer.onclick = e => {
            e.stopPropagation();
            this.close();
        }

        this.modalCloseButton.onclick = e => {
            e.stopPropagation();
            this.close();
        }

        /*MODAL ELEMENTS*/
        this.modalImg = document.getElementById('modalImg');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalDescription = document.getElementById('modalDescription');
        this.modalLink = document.getElementById('modalLink');
    }

    openFromButtonWithDataset(el) {
        /*PARSE DATA DESCRIPTION*/
        let data = this.datasetToArray(el.dataset);
        if (el === document.querySelector(".is-selected .project__button")) { 
            this.open(data) 
        };
    }
    
    open(data) {
        this.setAll(data);

        this.modalContainer.classList.add('modal__container--active');
        this.body.style.overflow = 'hidden';
    }

    close() {
        this.modalContainer.classList.remove('modal__container--active');
        this.body.style.overflow = 'initial';
    }

    toggle() {
        this.modalContainer.classList.toggle('modal__container--active');
        (this.body.style.overflow === 'hidden')
        ? (this.body.style.overflow = 'initial')
        : (this.body.style.overflow = 'hidden');
    }

    setAll(dataset) {
        this.setImage(dataset.modalimg);
        this.setTitle(dataset.modaltitle);
        this.setDescription(dataset.modaldescription);
        this.setLink(dataset.modallink);
    }

    setImage(url) {
        if (url) {
            this.modalImg.parentElement.style.display = "";
            this.modalImg.src = url;
        } else { 
            this.modalImg.parentElement.style.display = "none"; 
        }
    }

    setTitle(text) {
        this.modalTitle.innerText = text;
    }

    setDescription(paragraphArray) {
        let content = document.createDocumentFragment();

        let paragraph, p;
        let to = paragraphArray.length;


        for (let i = 0; i < to; i++) {
            paragraph = paragraphArray[i];
            p = document.createElement('p');
            p.innerText = paragraph;
            content.appendChild(p);
        }
        
        this.modalDescription.innerHTML = '';
        this.modalDescription.appendChild(content);
    }

    setLink(url) {
        if (url) {
            this.modalLink.style.display = "";
            this.modalLink.href = url;
        } else { 
            this.modalLink.style.display = "none"; 
        }
    }

    datasetToArray(dataset) {
        let data = Object.entries(dataset);
        let arrData = [];
        data.map(val => {
            arrData[val[0]] = val[1];
        });
        arrData.modaldescription = JSON.parse(arrData.modaldescription);

        return arrData;
    }

}

var modal = new Modal;