document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.cell');
    const clueDisplay = document.getElementById('clue-display');

    let word1 = {
        id: 'word1',
        data: 'GYNECEE',
        direction: 'vertical',
        startCell: {row: 0, col: 14},
        length: 7,
        clue: 'Appartement réservé aux femmes dans les maisons grecques et romaines',
        cells: []
    };
    let word2 = {
        id: 'word2',
        data: 'EPHEBOPHILIE',
        direction: 'vertical',
        startCell: {row: 2, col: 20},
        length: 12,
        clue: "Ce n'est pas le cas de tous les prêtres",
        cells: []
    };
    let word3 = {
        id: 'word3',
        data: 'PARTHENOGENESE',
        direction: 'horizontal',
        startCell: {row: 5, col: 9},
        clue: 'Reproduction sans fécondation dans une espèce sexuée',
        length: 14,
        cells: []
    };
    let word4 = {
        id: 'word4',
        data: 'PATRIMOINE',
        direction: 'vertical',
        startCell: {row: 8, col: 18},
        length: 10,
        clue: 'Biens de famille, biens hérités de ses parents',
        cells: []
    };
    let word5 = {
        id: 'word5',
        data: 'MATRIMONIAL',
        direction: 'vertical',
        startCell: {row: 9, col: 16},
        length: 11,
        clue: 'Relatif au mariage',
        cells: []
    };
    let word6 = {
        id: 'word6',
        data: 'VIRGINITE',
        direction: 'horizontal',
        startCell: {row: 12, col: 14},
        length: 9,
        clue: "Etat d'une personne vierge",
        cells: []
    };
    let word7 = {
        id: 'word7',
        data: 'PUERILITE',
        direction: 'vertical',
        startCell: {row: 15, col: 10},
        length: 9,
        clue: 'Action, parole, idée puérile',
        cells: []
    };
    let word8 = {
        id: 'word8',
        data: 'SENILE',
        direction: 'vertical',
        startCell: {row: 15, col: 13},
        length: 6,
        clue: "Qui est caractéristique de la vieillesse, dont les facultés intellectuelles sont dégradés par l'âge",
        cells: []
    };
    let word9 = {
        id: 'word9',
        data: 'FEMINICIDE',
        direction: 'horizontal',
        startCell: {row: 17, col: 9},
        length: 10,
        clue: "Meurtre d'une femme, d'une fille en raison de son sexe",
        cells: []
    };
    let word10 = {
        id: 'word10',
        data: 'MARITAL',
        direction: 'horizontal',
        startCell: {row: 19, col: 7},
        length: 7,
        clue: 'Qui concerne le mari, qui lui appartient (comme son orgueil)',
        cells: []
    };
    let word11 = {
        id: 'word11',
        data: 'NYMPHOMANE',
        direction: 'vertical',
        startCell: {row: 20, col: 19},
        length: 10,
        clue: "Femme ou mammifère femelle subissant une exagération pathologique de son  désir sexuel",
        cells: []
    };
    let word12 = {
        id: 'word12',
        data: 'VIRILISTE',
        direction: 'vertical',
        startCell: {row: 21, col: 5},
        length: 9,
        clue: "Personne prônant le culte de la virilité",
        cells: []
    };
    let word13 = {
        id: 'word13',
        data: 'VIRAGO',
        direction: 'vertical',
        startCell: {row: 21, col: 23},
        length: 6,
        clue: "Femme d'allure jugée masculine, aux manières rudes et autoritaires. C'est une matrone à barbe",
        cells: []
    };
    let word14 = {
        id: 'word14',
        data: 'MATRONE',
        direction: 'horizontal',
        startCell: {row: 22, col: 8},
        length: 7,
        clue: "Epouse d'un citoyen romain. Femme d'un certain âge, corpulente et vulgaire",
        cells: []
    };
    let word15 = {
        id: 'word15',
        data: 'PATERNOSTER',
        direction: 'horizontal',
        startCell: {row: 23, col: 19},
        length: 11,
        clue: 'Formule de cérémonie religieuse',
        cells: []
    };
    let word16 = {
        id: 'word16',
        data: 'CONJUGAISON',
        direction: 'vertical',
        startCell: {row: 25, col: 3},
        length: 11,
        clue: 'Ensemble des formes verbales suivant les voix, les modes, les temps, les personnes, les nombres',
        cells: []
    };
    let word17 = {
        id: 'word17',
        data: 'DOMINATRICE',
        direction: 'horizontal',
        startCell: {row: 26, col: 2},
        length: 11,
        clue: "Est une femme qui endosse le rôle dominant dans le cadre du BDSM",
        cells: []
    };
    let word18 = {
        id: 'word18',
        data: 'ANILE',
        direction: 'vertical',
        startCell: {row: 26, col: 17},
        length: 5,
        clue: 'Qui a rapport avec une vielle femme',
        cells: []
    };
    let word19 = {
        id: 'word19',
        data: 'MUJER',
        direction: 'vertical',
        startCell: {row: 27, col: 13},
        length: 5,
        clue: 'Femme en espagnol',
        cells: []
    };
    let word20 = {
        id: 'word20',
        data: 'EMASCULATION',
        direction: 'horizontal',
        startCell: {row: 28, col: 8},
        length: 12,
        clue: "C'est grâce à ce procédé que l'on dévore des chapons",
        cells: []
    };
    let word21 = {
        id: 'word21',
        data: 'MATRIARCHE',
        direction: 'horizontal',
        startCell: {row: 31, col: 2},
        length: 10,
        clue: "Femme qui joue un rôle important au sein d'une communauté, d'une famille",
        cells: []
    };
    let word22 = {
        id: 'word22',
        data: 'ADOLESCENT',
        direction: 'horizontal',
        startCell: {row: 34, col: 1},
        length: 10,
        clue: "Personne atteinte de l'âge bête",
        cells: []
    };
    let word23 = {
        id: 'word23',
        data: 'SENIOR',
        direction: 'vertical',
        startCell: {row: 34, col: 6},
        length: 6,
        clue: "Individu ayant atteint l'âge vulnérable où l'on reçoit des pubs pour des monte-escaliers",
        cells: []
    };
    let word24 = {
        id: 'word24',
        data: 'TRIUMVIRAT',
        direction: 'vertical',
        startCell: {row: 34, col: 10},
        length: 10,
        clue: 'Association de trois personnes qui exercent un pouvoir, une influence. (Comme Patrick Drahi, Martin Bouygues et Vincent Bolloré sur les médias',
        cells: []
    };
    let word25 = {
        id: 'word25',
        data: 'ANDROS',
        direction: 'horizontal',
        startCell: {row: 41, col: 7},
        length: 6,
        clue: 'Une marque célèbre de jus de fruits et de compotes',
        cells: []
    };
    let word26 = {
        id: 'word26',
        data: 'MARATRE',
        direction: 'vertical',
        startCell: {row: 22, col: 8},
        length: 7,
        clue: "Mauvaise belle mère",
        cells: []
    };
    
    let words = [];
    words.push(word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14, word15, word16, word17, word18, word19, word20, word21, word22, word23, word24, word25, word26);
    
    words.forEach(word => {
       if (word.direction === "horizontal") {
           for (let i = word.startCell.col; i < word.startCell.col + word.length; i++) {
               word.cells.push(document.getElementById("cell-" + word.startCell.row + "-" + i));
           }
       }
       if (word.direction === "vertical") {
           for (let i = word.startCell.row; i < word.startCell.row + word.length; i++) {
               word.cells.push(document.getElementById("cell-" + i + "-" + word.startCell.col));
           }
       }
    });
    
    let activeWord = null;


    function focusNextCell(currentCell) {
        if (!activeWord) return;

        const currentIndex = activeWord.cells.indexOf(currentCell);
        if (currentIndex < activeWord.cells.length - 1) {
            const nextCell = activeWord.cells[currentIndex + 1];
            nextCell.focus();
        } else {
            // On last cell, verify the word
            const isCorrect = verifyActiveWord();
            if (isCorrect) {
                // If correct, make cells green
                activeWord.cells.forEach(cell => {
                    cell.classList.remove('active');
                    cell.classList.add('valid');
                });
            } else {
                // If incorrect, make cells red
                activeWord.cells.forEach(cell => {
                    cell.classList.remove('active');
                    cell.classList.add('incorrect');
                });
            }
            activeWord = null;
            currentCell.blur();
        }
    }

    function verifyActiveWord() {
        if (!activeWord || !activeWord.data) {
            console.log(false, "No active word selected");
            return;
        }

        const currentWord = activeWord.cells.map(cell => cell.textContent).join('');
        const isCorrect = currentWord === activeWord.data;

        // Check if all cells (except empty ones) are valid after this word is verified
        if (isCorrect) {
            const allCells = document.querySelectorAll('.cell:not(.empty)');
            const allValid = Array.from(allCells).every(cell =>
                cell.classList.contains('valid') ||
                activeWord.cells.includes(cell)
            );

            if (allValid) {
                clueDisplay.textContent = 'Gagné !';
                clueDisplay.style.fontWeight = 'bold';
            }
        }

        console.log(isCorrect);
        return isCorrect;
    }



    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('cell')) {
            if (activeWord) {
                activeWord.cells.forEach(cell => {
                    cell.classList.remove('active');
                });
                activeWord = null;
                clueDisplay.textContent = ''; // Clear the clue
            }
        }
    });


    cells.forEach(cell => {
        if (cell.classList.contains('empty')) return;
        if (cell.classList.contains('valid')) return;

        cell.setAttribute('contenteditable', 'true');

        cell.addEventListener('keydown', function(event) {
            if (event.key.length === 1 && /^[a-zA-Z]$/.test(event.key)) {
                event.preventDefault();
                this.textContent = event.key.toUpperCase();
                this.dataset.letter = this.textContent;
                focusNextCell(this);
            }
        });

        cell.addEventListener('paste', (e) => {
            e.preventDefault();
        });

        cell.addEventListener('input', function(event) {
            const value = this.textContent.toUpperCase();
            if (value.length > 1) {
                this.textContent = value.charAt(value.length - 1);
            }
            this.dataset.letter = this.textContent;

            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(this);
            selection.removeAllRanges();
            selection.addRange(range);
        });
        
        cell.addEventListener('blur', function() {
            this.textContent = this.textContent.toUpperCase();
        });

        cell.addEventListener('click', function() {
            let foundWord = [];

            if (activeWord) {
                activeWord.cells.forEach(cell => {
                    cell.classList.remove('active');
                });
            }

            words.forEach(word => {
                if (word.cells.includes(this)) {
                    foundWord.push(word);
                }
            });

            if (foundWord.length === 1) activeWord = foundWord[0];
            if (foundWord.length === 2) {
                if (activeWord === foundWord[0]) {
                    activeWord = foundWord[1];
                } else {
                    activeWord = foundWord[0];
                }
            }

            if (activeWord) {
                // Update clue display
                clueDisplay.textContent = activeWord.clue;

                activeWord.cells.forEach(cell => {
                    cell.classList.add('active');
                    if (cell.classList.contains('incorrect')) cell.classList.remove('incorrect');
                });
                activeWord.cells[0].focus();
            }
        });

    });
});

