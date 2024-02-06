document.addEventListener("DOMContentLoaded", function () {

    const questionsContainer = document.getElementById("questions-container");
    const generateResultBtn = document.getElementById("generateResultBtn");


    function somar(celula1, celula2, celula3) {
        return celula1 + celula2 + celula3
    }
    function loadQuestionsFromFile(filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(processQuestions)
            .catch(handleError);
    }

    function processQuestions(questionsTxt) {
        const questions = questionsTxt.split('\n').filter(Boolean);
        createForm(questions);
    }

    function createForm(questions) {
        questions.forEach((question, index) => {
            const questionDiv = createQuestionDiv(question, index);
            questionsContainer.appendChild(questionDiv);
        });
    }

    function createQuestionDiv(question, index) {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionLabel = document.createElement("p");
        questionLabel.textContent = `${question}:`;
        questionDiv.appendChild(questionLabel);

        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");

        for (let j = 0; j < 4; j++) {
            const optionLabel = createOptionLabel(index, j);
            optionsDiv.appendChild(optionLabel);
        }

        questionDiv.appendChild(optionsDiv);
        return questionDiv;
    }

    function createOptionLabel(index, j) {
        const optionLabel = document.createElement("label");
        optionLabel.setAttribute("for", `q${index + 1}_${j}`);

        const optionInput = document.createElement("input");
        optionInput.setAttribute("type", "radio");
        optionInput.setAttribute("id", `q${index + 1}_${j}`);
        optionInput.setAttribute("name", `q${index + 1}`);
        optionInput.setAttribute("value", `${j}`);

        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(`${j}`));

        return optionLabel;
    }

    function handleError(error) {
        console.error('Erro ao carregar o arquivo:', error);
    }
    function classificarRespiracao(valor) {
        if (valor <= 2) {
            return "Respiração em equilíbrio";
        } else if (valor <= 3) {
            return "Respiração em desajuste";
        } else if (valor <= 6) {
            return "Respiração em desajuste";
        } else if (valor >= 7) {
            return "Respiração em hiperdesajuste";
        }
    }
    function calcularStatusT3(valor) {
        if (valor <= 4) {
            return "T3";
        } else if (valor <= 8) {
            return "T6";
        } else if (valor <= 9) {
            return "T9";
        } else if (valor >= 10) {
            return "T9";
        }
    }

    function calcularStatusM3(valor) {
        if (valor <= 4) {
            return "M3";
        } else if (valor <= 8) {
            return "M6";
        } else if (valor <= 9) {
            return "M9";
        } else if (valor >= 10) {
            return "M9";
        }
    }

    function calcularStatusR3(valor) {
        if (valor <= 4) {
            return "R3";
        } else if (valor <= 8) {
            return "R6";
        } else if (valor <= 9) {
            return "R9";
        } else if (valor >= 10) {
            return "R9";
        }
    }

    function calcularStatusA3(valor) {
        if (valor <= 4) {
            return "A3";
        } else if (valor <= 8) {
            return "A6";
        } else if (valor <= 9) {
            return "A9";
        } else if (valor >= 10) {
            return "A9";
        }
    }

    function calcularStatusHidratacao(valor) {
        if (valor <= 2) {
            return "Hidratação em equilíbrio";
        } else if (valor <= 3) {
            return "Hidratação em desajuste";
        } else if (valor <= 6) {
            return "Hidratação em desajuste";
        } else if (valor >= 7) {
            return "Hidratação em hiperdesajuste";
        }
    }
    function calcularStatusAlimentacao(valorF13) {
        if (valorF13 <= 2) {
            return "Alimentação em equilíbrio";
        } else if (valorF13 <= 3) {
            return "Alimentação em desajuste";
        } else if (valorF13 <= 6) {
            return "Alimentação em desajuste";
        } else if (valorF13 >= 7) {
            return "Alimentação em hiperdesajuste";
        }
    }

    function calcularStatusSexualidade(valorF14) {
        if (valorF14 <= 2) {
            return "Sexualidade em equilíbrio";
        } else if (valorF14 <= 3) {
            return "Sexualidade em desajuste";
        } else if (valorF14 <= 6) {
            return "Sexualidade em desajuste";
        } else if (valorF14 >= 7) {
            return "Sexualidade em hiperdesajuste";
        }
    }

    function calcularStatusSono(valorF15) {
        if (valorF15 <= 2) {
            return "Sono em equilíbrio";
        } else if (valorF15 <= 3) {
            return "Sono em desajuste";
        } else if (valorF15 <= 6) {
            return "Sono em desajuste";
        } else if (valorF15 >= 7) {
            return "Sono em hiperdesajuste";
        }
    }

    function calcularStatusExcrecao(valorF16) {
        if (valorF16 <= 2) {
            return "Excreção em equilíbrio";
        } else if (valorF16 <= 3) {
            return "Excreção em desajuste";
        } else if (valorF16 <= 6) {
            return "Excreção em desajuste";
        } else if (valorF16 >= 7) {
            return "Excreção em hiperdesajuste";
        }
    }

    function calcularStatusCorpo(valorF17) {
        if (valorF17 <= 2) {
            return "Corpo em equilíbrio";
        } else if (valorF17 <= 3) {
            return "Corpo em desajuste";
        } else if (valorF17 <= 6) {
            return "Corpo em desajuste";
        } else if (valorF17 >= 7) {
            return "Corpo em hiperdesajuste";
        }
    }
    function calcularStatusAutoconfianca(valor) {
        if (valor <= 9) {
            return "Autoconfiança em equilíbrio";
        } else if (valor <= 17) {
            return "Autoconfiança em desajuste";
        } else if (valor <= 18) {
            return "Autoconfiança em desajuste";
        } else if (valor >= 19) {
            return "Autoconfiança em hiperdesajuste";
        }
    }

    function calcularStatusAutovalor(valor) {
        if (valor <= 6) {
            return "Autovalor em equilíbrio";
        } else if (valor <= 11) {
            return "Autovalor em desajuste";
        } else if (valor <= 12) {
            return "Autovalor em desajuste";
        } else if (valor >= 13) {
            return "Autovalor em hiperdesajuste";
        }
    }

    function calcularStatusAutoamor(valor) {
        if (valor <= 6) {
            return "Autoamor em equilíbrio";
        } else if (valor <= 11) {
            return "Autoamor em desajuste";
        } else if (valor <= 12) {
            return "Autoamor em desajuste";
        } else if (valor >= 13) {
            return "Autoamor em hiperdesajuste";
        }
    }

    function calcularStatusAutogestao(valor) {
        if (valor <= 4) {
            return "Autogestão em equilíbrio";
        } else if (valor <= 6) {
            return "Autogestão em desajuste";
        } else if (valor <= 10) {
            return "Autogestão em desajuste";
        } else if (valor <= 13) {
            return "Autogestão em hiperdesajuste";
        } else if (valor >= 14) {
            return "Autogestão em hiperdesajuste";
        }
    }

    function calcularStatusAutotolerancia(valor) {
        if (valor <= 3) {
            return "Autotolerância em equilíbrio";
        } else if (valor <= 5) {
            return "Autotolerância em desajuste";
        } else if (valor <= 6) {
            return "Autotolerância em desajuste";
        } else if (valor >= 7) {
            return "Autotolerância em hiperdesajuste";
        }
    }
    function sendEmail(file) {
        const subject = "Assunto do E-mail";  // Substitua pelo assunto desejado
        const body = "Corpo do E-mail";  // Substitua pelo corpo desejado
    
        const emailLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        const a = document.createElement('a');
        a.href = emailLink;
        a.target = '_blank';
        a.download = file;
        a.click();
    }
    
    function generateResult() {
        // Cria uma nova pasta de trabalho
        const novaPastaDeTrabalho = XLSX.utils.book_new();

        // Cria uma nova planilha dentro da pasta de trabalho
        const novaPlanilha = XLSX.utils.aoa_to_sheet([["Pergunta", "Resposta"]]);

        // Adiciona as perguntas e respostas à nova planilha
        const questionDivs = document.querySelectorAll('.question');
        let celulas = new Array(67).fill(0); // Inicializa um array para armazenar os valores até 67

        questionDivs.forEach((questionDiv, index) => {
            const pergunta = questionDiv.querySelector('p').textContent;
            const selectedOption = questionDiv.querySelector(`input[name="q${index + 1}"]:checked`);
            const resposta = selectedOption ? parseInt(selectedOption.value) : 0; // Converte para número

            XLSX.utils.sheet_add_aoa(novaPlanilha, [[pergunta, resposta]], { origin: -1 });

            // Atualiza as variáveis celulas com base nas perguntas até o índice 67
            if (index < 67) {
                celulas[index] = resposta;
            }
        });


        // Calcula a respiração
        //grafico 1
        var resultadoRespiracao = somar(celulas[0], celulas[1], celulas[3]);
        var resultadoHidratacao = somar(celulas[5], celulas[8], celulas[11]);
        var resultadoAlimentacao = somar(celulas[16], celulas[17], celulas[20]);
        var resultadoSexualidade = somar(celulas[22], celulas[23], celulas[26]);
        var resultadoSono = somar(celulas[32], celulas[33], celulas[37]);
        var resultadoExcrecao = somar(celulas[39], celulas[40], celulas[43]);
        var resultadoCorpo = somar(celulas[53], celulas[50], celulas[39]);


        var clacificaçaoRespiraçao = classificarRespiracao(resultadoRespiracao);
        var classificacaoHidratacao = calcularStatusHidratacao(resultadoHidratacao);
        var classificacaoAlimentacao = calcularStatusAlimentacao(resultadoAlimentacao);
        var classificacaoSexualidade = calcularStatusSexualidade(resultadoSexualidade);
        var classificacaoSono = calcularStatusSono(resultadoSono);
        var classificacaoExcrecao = calcularStatusExcrecao(resultadoExcrecao);
        var classificacaoCorpo = calcularStatusCorpo(resultadoCorpo);


        //grafico 2
        var resultado1 = celulas[13] + celulas[31] + celulas[45] + celulas[58];
        var resultado2 = celulas[14] + celulas[30] + celulas[46] + celulas[59];
        var resultado3 = celulas[27] + celulas[29] + celulas[47] + celulas[60];
        var resultado4 = celulas[61] + celulas[48] + celulas[28] + celulas[15];

        var classificacaoResultado1 = calcularStatusT3(resultado1);
        var classificacaoResultado2 = calcularStatusM3(resultado2);
        var classificacaoResultado3 = calcularStatusR3(resultado3);
        var classificacaoResultado4 = calcularStatusA3(resultado4);

        //grafico 3
        // Certifique-se de que os índices estão corretos
        var autoconfianca = celulas[2] + celulas[6] + celulas[7] + celulas[9] + celulas[10] + celulas[18] + celulas[19] + celulas[24] + celulas[34];
        var autoamor = celulas[25] + celulas[35] + celulas[41] + celulas[51] + celulas[62] + celulas[64];
        var autovalor = celulas[36] + celulas[42] + celulas[52] + celulas[63] + celulas[65] + celulas[66];
        var estresse = celulas[4] + celulas[12] + celulas[21] + celulas[27] + celulas[38] + celulas[44] + celulas[54];
        var tolerancia = celulas[55] + celulas[56] + celulas[57];

        var statusAutoconfianca = calcularStatusAutoconfianca(autoconfianca);
        var statusAutovalor = calcularStatusAutovalor(autovalor);
        var statusAutoamor = calcularStatusAutoamor(autoamor);
        var statusAutogestao = calcularStatusAutogestao(estresse);
        var statusAutotolerancia = calcularStatusAutotolerancia(tolerancia);

        var grafico1 = {
            series: [{
                data: [resultadoRespiracao, resultadoHidratacao, resultadoAlimentacao, resultadoSexualidade, resultadoSono, resultadoExcrecao, resultadoCorpo],
            }],
            chart: {
                height: 350,
                type: 'radar',
            },
            xaxis: {
                categories: [clacificaçaoRespiraçao, classificacaoHidratacao, classificacaoAlimentacao, classificacaoSexualidade, classificacaoSono, classificacaoExcrecao, classificacaoCorpo]
            },
            colors: ['#111'], // Cor da teia (linha do gráfico)
        };

        var grafico2 = {
            series: [{
                data: [resultado1, resultado2, resultado3, resultado4],
            }],
            chart: {
                height: 200,
                type: 'radar',
            },
            xaxis: {
                categories: [classificacaoResultado1, classificacaoResultado2, classificacaoResultado3, classificacaoResultado4]
            }
        };

        var grafico3 = {
            series: [{
                data: [autoconfianca, autoamor, autovalor, estresse, tolerancia],
            }],
            chart: {
                height: 350,
                type: 'radar',
            },
            xaxis: {
                categories: [statusAutoconfianca, statusAutoamor, statusAutovalor, statusAutogestao, statusAutotolerancia]
            }
        };

        var chart = new ApexCharts(document.querySelector("#grafico1"), grafico1);
        chart.render();
        var chart = new ApexCharts(document.querySelector("#grafico2"), grafico2);
        chart.render();
        var chart = new ApexCharts(document.querySelector("#grafico3"), grafico3);
        chart.render();
        // Adiciona a nova planilha à pasta de trabalho
        XLSX.utils.book_append_sheet(novaPastaDeTrabalho, novaPlanilha, "Perguntas_e_Respostas");

        // Salva a nova pasta de trabalho como um arquivo Excel
        XLSX.writeFile(novaPastaDeTrabalho, "perguntas_e_respostas.xlsx");
        console.log("Nova planilha criada com perguntas e respostas.");
    }

    // Associar evento de clique ao botão de gerar resultado
    generateResultBtn.addEventListener("click", function () {
        document.getElementById('availabilityContainer').style.display = 'none';
        document.getElementById('container-principal').style.display = 'none';
        document.getElementById('agendameto').style.display = 'block';
        document.getElementById('alreadyScheduledMsg').style.display = 'block';
        generateResult();
        document.documentElement.scrollTop = 0;
    });


    // Carregar perguntas do arquivo ao carregar a página
    const filePath = 'perguntas.txt';
    loadQuestionsFromFile(filePath);

    // Encontre o botão pelo ID, classe ou qualquer outra maneira única
    var botao = document.querySelector('.VfPpkd-LgbsSe');

    // Adicione um ouvinte de clique ao botão
    botao.addEventListener('click', function () {
        console.log("foi clicado");

        // Altere o estilo do elemento de agendamento para ocultá-lo
        document.querySelector('#agendamento').style.display = 'none';
    });

});