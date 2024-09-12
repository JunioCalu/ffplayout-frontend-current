export default {
    ok: 'Ok',
    cancel: 'Cancelar',
    socketConnected: 'Aviso! stream conectada.',
    socketDisconnected: 'Aviso! stream desconectado.',
    alert: {
        wrongLogin: 'Dados incorretos!',
    },
    button: {
        login: 'Logar',
        home: 'Início',
        player: 'Player',
        media: 'Armazenamento',
        message: 'Legenda',
        logging: 'Registro',
        channels: 'Canais',
        configure: 'Configurar',
        logout: 'Sair',
    },
    error: {
        notFound: 'Página não encontrada',
        serverError: 'Erro do servidor interno',
    },
    input: {
        username: 'Usuário',
        password: 'Senha',
    },
    system: {
        cpu: 'CPU',
        cores: 'Núcleos',
        load: 'Carga de CPU',
        memory: 'Memória',
        swap: 'Swap',
        total: 'Total',
        usage: 'Uso',
        network: 'Rede',
        in: 'Entrada',
        out: 'Saída',
        storage: 'Armazenamento',
        device: 'Dispositivo',
        size: 'Tamanho total',
        used: 'Disponível',
    },
    control: {
        noClip: 'Nenhum clipe está sendo reproduzido',
        ingest: 'Ingestão ao Vivo',
        start: 'Iniciar Serviço do Playout',
        last: 'Ir para o último Clipe',
        stop: 'Parar Serviço do Playout',
        reset: 'Redefinir Estado do Playout',
        restart: 'Reiniciar Serviço do Playout',
        next: 'Ir para o próximo Clipe',
    },
    player: {
        start: 'Horário',
        file: 'Arquivo',
        play: 'Play',
        title: 'Título',
        duration: 'Duração',
        in: 'Início',
        out: 'Fim',
        ad: 'Ad',
        edit: 'Editar',
        delete: 'Deletar',
        copy: 'Copiar playlist',
        loop: 'Repetir Clipes na Playlist',
        remote: 'Adicionar fonte (remota) à Playlist',
        import: 'Importar arquivo de texto/.m3u8',
        generate: 'Gerador de Playlist simples e avançado',
        reset: 'Resetar Playlist',
        save: 'Salvar Playlist',
        deletePlaylist: 'Deletar Playlist',
        unsavedProgram: 'Existe uma Programação que não está salva!',
        copyTo: 'Copiar Programação atual para',
        addEdit: 'Adicionar/Editar Fonte',
        audio: 'Áudio',
        customFilter: 'Filtro Personalizado',
        deleteFrom: 'Excluir programação de',
        deleteSuccess: 'Lista de reprodução excluída...',
        generateProgram: 'Gerar Programação',
        simple: 'Simples',
        advanced: 'Avançado',
        sorted: 'Ordenado',
        shuffle: 'Aleatório',
        shift: 'Diferença horária',
        all: 'Todos',
        addBlock: 'Adicionar bloco de tempo',
        infinitInfo: 'O playout é executado no modo infinito. Nenhuma informação baseada em tempo é possível',
        generateDone: 'Gerar lista de reprodução concluída...',
        dateYesterday: 'A hora atual é anterior à hora de início da lista de reprodução!',
    },
    media: {
        notExists: 'O armazenamento não existe!',
        create: 'Criar Pasta',
        upload: 'Enviar Arquivos',
        deleteTitle: 'Deletar Arquivo/Pasta',
        deleteQuestion: 'Tem certeza que deseja deletar?',
        preview: 'Visualizar',
        rename: 'Renomear Arquivo',
        newFile: 'Novo nome de arquivo',
        createFolder: 'Criar Pasta',
        foldername: 'Nome da Pasta',
        current: 'Atual',
        overall: 'Total',
        uploading: 'Enviando',
        moveError: 'Erro ao mover',
        deleteError: 'Erro ao deletar!',
        folderExists: 'A pasta já existe',
        folderCreate: 'Criação da pasta concluída...',
        folderError: 'Erro ao criar pasta',
        uploadError: 'Erro ao carregar',
        fileExists: 'O arquivo já existe!',
    },
    message: {
        savePreset: 'Salvar predefinição',
        newPreset: 'Nova predefinição',
        delPreset: 'Excluir predefinição',
        delText: 'Tem certeza de que deseja excluir a predefinição?',
        placeholder: 'Mensagem',
        xAxis: 'Eixo X',
        yAxis: 'Eixo Y',
        showBox: 'Mostrar caixa',
        boxColor: 'Cor da caixa',
        boxAlpha: 'Caixa Alfa',
        size: 'Tamanho',
        spacing: 'Espaçamento',
        overallAlpha: 'Alfa geral',
        fontColor: 'Cor da fonte',
        fontAlpha: 'Fonte Alfa',
        borderWidth: 'Largura da borda',
        send: 'Enviar',
        name: 'Nome',
        saveDone: 'Salvar predefinição concluída!',
        saveFailed: 'Falha ao salvar a predefinição!',
        sendDone: 'Enviando com sucesso...',
        sendFailed: 'O envio falhou...',
    },
    log: {
        download: 'Baixar arquivo de registro',
    },
    advanced: {
        title: 'Configurações avançadas',
        decoder: 'Decoder',
        encoder: 'Encoder',
        filter: 'Filter',
        ingest: 'Ingest',
        updateSuccess: 'Configurações avançadas salva!',
        updateFailed: 'Configurações avançadas foi falhado!',
        warning: 'Aviso! Essas configurações são experimentais e destinadas apenas a usuários avançados familiarizados com o ffmpeg. Altere as configurações aqui apenas se tiver certeza do que está fazendo! As configurações podem tornar o sistema instável.',
    },
    config: {
        channel: 'Canal',
        user: 'Usuário',
        channelConf: 'Configuração do Canal',
        addChannel: 'Adicionar novo Canal',
        name: 'Nome',
        previewUrl: 'URL de Visualização',
        extensions: 'Extensões Extras',
        save: 'Salvar',
        delete: 'Deletar',
        updateChannelSuccess: 'Atualização da configuração do canal bem-sucedida!',
        updateChannelFailed: 'Falha na atualização da configuração do canal!',
        errorChannelDelete: 'O primeiro canal não pode ser deletado!',
        deleteChannelSuccess: 'Exclusão da configuração da canal bem-sucedida!',
        deleteChannelFailed: 'Falha na exclusão da configuração da canal!',
        playoutConf: 'Configuração de Playout',
        general: 'Geral',
        rpcServer: 'RPC Server',
        mail: 'Email',
        logging: 'Registro',
        processing: 'Processamento',
        ingest: 'Ingestão',
        playlist: 'Playlist',
        storage: 'Armazenamento',
        text: 'Texto',
        task: 'Tarefa',
        output: 'Saída',
        placeholderPass: 'Senha',
        help: 'Ajuda',
        generalText: `Às vezes pode acontecer que um arquivo esteja corrompido mas ainda assim ele pode ser reproduzido, isso pode causar um erro de transmissão em todos os arquivos seguintes. A única maneira de corrigir isso é parar e reiniciar o ffplayout. Aqui só dizemos quando parar, o processo de início é por sua conta. A melhor maneira é um serviço systemd no Linux.
        'stop_threshold' vai parar o ffplayout se estiver assíncrono em um tempo acima deste valor. Um número menor que 3 pode causar erros inesperados.`,
        rpcText: 'Execute um servidor JSON RPC para obter informações sobre o que está sendo reproduzido e para algumas funções de controle.',
        mailText: `Envie mensagens de erro para o endereço de email, como lista de reprodução faltando; formato JSON inválido; caminho do clipe ausente. Deixe o destinatário em branco se não for necessário. 'mail_level' pode ser INFO, WARNING ou ERROR. 'interval' é o tempo em segundos até que um novo e-mail seja enviado.`,
        logText: `Se 'log_to_file' estiver ativado (true), o registro de log será salvo em um arquivo de texto, e se desativado (false), registrará o log no console. Se 'local_time' estiver desativado (false) o sistema definirá os carimbos de data/hora do registro para UTC. Defina o caminho para /var/log/ apenas se você estiver executando o programa como daemon.
        'level' pode ser DEBUG, INFO, WARNING, ERROR. 'ffmpeg_level' pode ser INFO, WARNING, ERROR. 'detect_silence' registra uma mensagem de erro se a linha de áudio ficar silenciosa por 15 segundos durante o processo de validação.`,
        processingText: `Processamento padrão para todos os clipes para torná-los únicos. O modo ('mode') pode ser Playlist ou Folder. 'aspect' deve ser um número de ponto flutuante. 'logo' é usado apenas se o caminho existir.
        'logo_scale' dimensiona o logo para o tamanho desejado, deixe esse campo de configuração vazio se nenhum dimensionamento for necessário, o formato é 'largura:altura', por exemplo '100:-1' para dimensionamento proporcional. Com 'logo_opacity' você pode tornar o logo transparente.
        Com 'audio_tracks' é possível configurar quantas faixas de áudio devem ser processadas. 'audio_channels' pode ser usado se o áudio tiver mais canais do que apenas estéreo. Com 'logo_position' no formato 'x:y' você define a posição do logo. Com 'custom_filter' é possível aplicar filtros adicionais. As saídas do filtro devem terminar com [c_v_out] para filtros de vídeo e [c_a_out] para filtros de áudio.`,
        ingestText: `Execute um servidor de ingestão para poder receber um fluxo de stream a partir de uma fonte externa, como por exemplo um software de streaming como o OBS Studio. Este stream substituirá o streaming normal até que seja concluído. Existe apenas um mecanismo de autenticação muito simples para verificar se o nome do stream está correto. 'custom_filter' pode ser usado da mesma forma que na seção de processo.`,
        playlistText: `'path' é o caminho para o arquivo de playlist. 'path' pode ser um caminho para um único arquivo ou um diretório. Se um diretório for especificado, defina apenas a pasta raiz desse diretório, por exemplo '/playlists', subdiretórios serão lidos pelo programa. Subdiretórios precisam seguir a seguinte estrutura de diretórios: '/playlists/2018/01'.
        'day_start' é o horário fixo, inicial, em que a playlist será reproduzida, deixe 'day_start' vazio se a lista de reprodução sempre deve começar do início. 'length' representa a duração desejada da playlist, se vazio, a duração real não será considerada. 'infinit: true' funciona com um arquivo de lista de reprodução único e o repete infinitamente.`,
        storageText: `Reproduza arquivos de mídia de maneira ordenada ou aleatória a partir de um caminho de diretório ('path') especificado. 'filler_clip' define um "clipe de preenchimento", cuja função é preencher a lacuna de tempo de uma playlist com duração inferior a 24 horas completas, esse clipe ou conjunto de clipes também será repetido quando algum arquivo de mídia não puder ser reproduzido, quando estiver indisponível ou se nenhuma playlist válida estiver sendo reproduzida. Defina 'extensions' para delimitar a busca interna de arquivos de mídia apenas por arquivos com a extensão adicionada. Defina 'shuffle' como 'true' para selecionar arquivos aleatoriamente.`,
        textText: `Sobreponha texto (legenda) em combinação com o libzmq, para manipulação remota de texto. No Windows, o caminho do arquivo de fonte deve ser 'C\\:/WINDOWS/fonts/DejaVuSans.ttf'. 'text_from_filename' ativa a extração de texto (legenda) a partir de um arquivo de texto especificado. Com 'style' você pode definir os parâmetros drawtext como posição, cor, etc. Postar Texto via API irá substituir isso. Com 'regex' você pode formatar o nome do arquivo para obter um título.`,
        taskText: `Execute um programa externo em conjunto com um determinado objeto de mídia. O objeto de mídia está no formato JSON e contém todas as informações sobre o clipe atual. O programa externo pode ser um script ou um binário. ou um binário, mas deve ser executado apenas por um curto período de tempo.`,
        outputText: `A compressão final do stream gerado pelo playout. Ajuste as configurações de acordo com suas necessidades. 'mode' possui as opções 'desktop', 'hls', 'null', 'stream'. Use 'stream' e ajuste as configurações de 'output_param:' se você desejar retransmitir o stream para um servidor rtmp/rtsp/srt/... Em ambiente de produção não sirva a playlist hls com ffpapi, use nginx ou outro servidor web!`,
        restartTile: 'Reiniciar Playout',
        restartText: 'Reiniciar o ffplayout para aplicar as alterações?',
        updatePlayoutSuccess: 'Sucesso na atualização da configuração do playout!',
        updatePlayoutFailed: 'Falha na atualização da configuração do playout!',
        forbiddenPlaylistPath: 'Acesso proibido: A pasta da lista de reprodução não pode ser aberta',
        noPlayoutConfig: 'Nenhuma configuração de playout encontrada!',
        hlsPath: 'HLS Path',
        playlistPath: 'Playlist Path',
        storagePath: 'Storage Path',
        sharedStorage: 'O armazenamento compartilhado está ativado, use a mesma raiz de armazenamento para todos os canais',
    },
    user: {
        title: 'Configuração de usuário',
        add: 'Adicionar usuário',
        delete: 'Deletar',
        name: 'Nome de usuário',
        mail: 'Email',
        password: 'Senha',
        newPass: 'Nova Senha',
        confirmPass: 'Confirmar Senha',
        save: 'Salvar',
        admin: 'Administrador',
        deleteNotPossible: 'Excluir o usuário atual não é possível!',
        deleteSuccess: 'Usuário deletado com sucesso!',
        deleteError: 'Erro ao deletar usuário',
        addSuccess: 'Usuário adicionado com sucesso!',
        addFailed: 'Falha ao adicionar usuário!',
        mismatch: 'Senhas não coincidem!',
        updateSuccess: 'Atualização do perfil do usuário bem-sucedida! ',
        updateFailed: 'Atualização do perfil do usuário falhou!',
    },
}