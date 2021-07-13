export default {
    login: {
        user: "账号",
        password: "密码",
        verificationCode: "验证码",
        login: "登录",
        guomi: "国密",
        hash: "普通"
    },
    inputText: {
        user: "请输入账号",
        password: "请输入密码",
        verificationCode: "请输入验证码",
        blockInput: "请输入区块哈希或块高",
        contractSearch: "请输入合约名或合约地址",
        transactionSearch: "请输入交易哈希或块高"
    },
    text: {
        changeTmp: '选择应用模板', 
        customApplication: '自定义应用',
        isRedeploy: '合约已部署 是否重新部署？',
        noStoreContract: '请在左侧面板点击打开一个合约',
        reqOvertime: "请求超时",
        loginFail: "登陆失败",
        systemError: "系统错误",
        copy: "复制",
        arrow: "箭头",
        copyErrorMsg: "key为空，不复制。",
        copySuccessMsg: "复制成功",
        copyHash: "复制哈希",
        total: "共",
        tiao: "条",
        blockSearchMsg: "搜索区块哈希不支持模糊查询",
        delete: "删除",
        update: "修改",
        confirmDelete: "确认删除？",
        confirmDorp: "先停止群组,再删除本地群组数据,确认？",
        confirmDorp2: "删除群组数据将删除本地数据库对应的节点数据、区块与交易数据、合约数据等（不影响链上数据）是否确认删除群组数据？",
        confirmStop: "请确保当前选中节点所属群组数大于1个，否则停止该节点的群组将导致节点共识异常",
        sure: "确定",
        cancel: "取消",
        select: "请选择",
        tips: "提示",
        updateSuccessMsg: "修改成功",
        createSuccessMsg: "新建成功",
        save: "保存",
        compile: "编译",
        deploy: "部署",
        send: "发交易",
        selectSuccess: "查询成功！",
        transactionSuccess: "交易成功！",
        transactionFail: "交易失败！",
        noData: "暂无数据",
        input: "请输入",
        search: "查询",
        example: "例如",
        implement: "执行",
        implementResult: "执行结果",
        confirmSubmit: "确认提交？",
        addSuccess: "新增成功",
        Administrator: '管理员',
        normalUsers: '普通用户',
        modify: "修改",
        start: '启动',
        stop: '停止',
        remove: '移除',
        recover: '恢复',
        add: '添加',
        parse: '解析',
        parseTitle: "请输入合约ABI",
        INEXISTENT: "不存在",
        STOPPING: "正在停止",
        RUNNING: "运行中",
        STOPPED: "已停止",
        DELETED: "已删除",
        FAIL: "失败",
        parseAbiManually: "函数ABI编辑",
        addParameter: "添加参数",
        functionType: "函数名",
        argument: "参数",
        value: "值",
        dropGroupData: "删除群组数据",
        running: "运行",
        maintaining: "维护中",
        abnormal: "异常",
        nodeAddGroupSuccess: "请到节点管理模块将节点设置为共识节点",
        externalNode: "外部节点",
        groupTimestamp: "创世块时间戳",
        nodeList: "节点列表",
        joinExitedGroup: "单节点加入已有群组",
        timestampConf: "群组创世块配置的时间戳",
        sealerListConf: '群组创世块配置的共识节点列表 ，例如 : ["nodeId1","nodeId2"]',
        sealerListConf_1: '群组创世块配置的共识节点列表 ，加入群组必须与创世块配置的共识节点列表（非当前共识节点列表）一致，例如 : ["nodeId1","nodeId2"]',
        group: "群组",
        groupConfTitle: "创世块配置",
        groupConf: "的创世块冲突，请检查该群组的节点群组配置文件",
        groupConf4: "的本地数据与链上群组数据存在冲突，如重建链或群组，请到",
        groupMgmt: "群组管理",
        groupConf4_1: "中删除相应群组的数据或新建后台数据库",
        groupConf4_all: "群组的本地数据与链上群组数据存在冲突，如重建链或群组，请在群组管理中删除相应群组的数据或新建后台数据库",
        confirm: '确认',
        importSuccessed: '导入成功',
        noExportGroup: "当前群组为同步链上群组所得，无创世块配置",
        agreeNode_1: "新节点加入已有群组包含3个步骤：",
        agreeNode_2: "本管理台中若已包含当前群组的节点前置（共识节点/观察节点），可点击下方左侧按钮，提前将新节点加入到当前群组的共识节点/观察节点;",
        agreeNode_3: "本平台中无当前群组的节点前置（共识节点/观察节点），则需要用户另行将当前节点",
        agreeNode_4: "添加到当前群组的共识节点/观察节点，如已添加，点击“继续”按钮进行下一步操作;",
        agreeNode_5: "生成群组、启动群组、加入群组",
        agreeNode_6: "（共识节点/观察节点）",
        agreeNode_7: "详情可参考右上角的帮助文档-WeBASE管理平台使用手册-附录-动态群组管理使用指南",
        addAgreeNode: "添加为观察节点",
        agreedNode: "已添加，继续",
        nodeId: "节点",
        getFail: "获取失败",
        agreeNodeBtn: "已添加为共识/观察节点，继续",
        addNode: "新增节点",
        upgradeNode: "升级节点",
        reset: "删除链",
        resetSuccess: "删除成功",
        deploying: "部署中",
        deployFail: "部署失败",
        restarting: "重启中",
        deleteChain: "此操作将删除该链, 是否继续?",
        adding: "添加中",
        addFail: "添加失败",
        imageMode: "镜像拉取方式",
        manual: "手动",
        automatic: "自动 (推荐)",
        imageModeInfo1: "自动拉取：从cdn拉取镜像到主机。",
        imageModeInfo2: "手动部署：手动上传docker镜像压缩包到主机。",
        imageModeInfo3: "dockerhub：从docker官网拉取镜像到主机。",
        hostListInfo: "操作系统要求：CentOS 7.2 / Ubuntu 16.04 / Debian 9;配置要求：单机2核4G，500G硬盘；需要配置ssh免密登录",
        chainName: "链名称",
        chainVersion: "链版本",
        chainStatus: "链状态",
        chainProgress: "链进度",
        chainDeployed: "链已部署完成",
        cancelDelete: "已取消删除",
        hostStatus: "主机状态",
        hostTitle: "主机信息",
        hostMgrTitle: "主机管理",
        chainTitle: "链管理",
        dockerCatalog: "docker目录",
        errInfo: "查看错误信息",
        webaseVersion: "WeBASE版本",
        supportVersion: "兼容版本",
        port5002: "默认5002",
        ip: "主机IP",
        org: "机构名",
        developer: "开发者",
        goCreatPrivateKey: "请先到私钥管理创建私钥",
        searchMessage: "查询成功",
        emptyFolder: "空文件夹",
        folderIsExists: "目录已存在",
        folder: "文件夹",
        previewAndDescription: "预览和说明",
        developing: "应用开发中，敬请期待。。。",
        appIntroduction: "合约仓库",
        warehouseDes: "合约仓库中提供常用的工具合约和推荐应用合约模板。用户可将合约导入到自己目录进行引入。",
        fileSize: "上传文件大小不能超过 100kb!",
        registerCns: "注册CNS",
        version: "版本号",
        no: "否",
        yes: "是",
        registerSuccess: "注册成功",
        register: "注册",
        cnsName: "CNS名",
        cns: "CNS",
        registerCnsTips: "如果版本号为空，则没有注册过CNS，可以输入版本号进行注册",
        registered: "已注册",
        updateRegister: "是否要更新注册",
        chainInfo: "链信息",
        chainType: "链类型",
        sha256: "非国密",
        sm3: "国密",
        contractCount: "批量上传合约数量不能超过20个",
        addChain: "新增链",
        check: "检测",
        notNull: "不能为空",
        nodeCount: "节点数量必须大于或等于两个",
        checkSuccess: "检测成功",
        checkFail: "检测失败",
        initializeStart: "初始化开始",
        initializeSuccess: "初始化成功",
        initializeFail: "初始化失败",
        chainConfigSuccess: "链配置成功",
        addNodeConfigSuccess: "新增节点配置成功",
        new: "新增",
        configSuccess: "主机链配置成功",
        configFail: "主机链配置失败",
        NotCheck: "未检测",
        addHost: "添加主机",
        installDirectory: "安装目录",
        checkHostInfo: "检测主机, 是否继续?",
        Cancelled: '已取消',
        deleteHostInfo: "是否删除该主机?",
        deleteHostSuccess: "删除主机成功",
        portConflict: "端口冲突",
        used: "已被使用",
        addHostSuccess: "新增主机成功",
        noviceGuide: "新手引导",
        click: "点击",
        here: "此处",
        enterHost: "进入主机管理",
        environmentReady: "环境准备",
        readyAnsibleInfo: "需要在WeBASE-Node-Manager所在机器安装Ansible，并为Ansible配置私钥",
        readyDockerInfo: "需要安装最新版Docker并启动Docker，配置docker用户组",
        visualization: "可视化部署流程",
        addHostInfo: "进入主机管理，点击新增主机按钮，填入ip和文件路径（文件路径为节点的安装路径）",
        addCheckNode: "添加节点信息并检测、初始化主机",
        addCheckNodeInfo1: "进入节点管理，选择镜像拉取方式，选择链版本，点击新增节点按钮添加节点。",
        addCheckNodeInfo2: "新增节点弹窗选择主机，填写各个端口，填写节点个数，节点个数即为新增几个节点，其端口根据填写的端口递增。",
        addCheckNodeInfo3: "注意：不要填写已使用的端口或者在递增范围内有已使用的端口。",
        checkNodeInfo: "检测主机，新增完节点后，点击检测按钮。",
        initializationInfo: "初始化主机，当节点状态为检测成功，可以执行初始化操作，点击初始化按钮。",
        deployStartChain: "部署链并启动",
        deployStartChainInfo: "当节点状态为初始化成功，即可进行部署操作，点击部署按钮，部署链是异步操作，时间较长，请耐心等待。",
        nodeLog: "操作日志",
        checkErrorInfo: "节点未检测或检测失败，不能执行初始化",
        newHost: "新增主机",
        addNodeInfo: "添加节点完成",
        goHostInfo: "请到主机管理添加主机信息",
        down: "停止",
        noAddNodeInfo: "请添加节点",
        leavePageInfo: "离开此页面将停止新增链/新增节点过程，确认离开此页面？",
        laodngCheck: "检测中，请等待",
        loadingInit: "初始化中，请等待",
        loadingDeploy: "部署中，请等待",
        loadingInfo: "链启动中，大约需要几分钟",
        ruleAddUser: "请新增私钥用户",
        loading: "加载中",
        clearNode: "清空表单",
        clearNodeInfo: "清空表单，请确认？",
        startingInfo: "节点启动中，大约需要30秒...",
        stopingInfo: "节点停止中，大约需要30秒...",
        resetingInfo: "链删除中，请等待...",
        deletingingInfo: "节点删除中,请等待...",
        cnsNameVersion: "CNS名或CNS版本不能为空",
        startingInfo: "节点启动中，大约需要30秒",
        stopingInfo: "节点停止中，大约需要30秒",
        resetingInfo: "链删除中，请等待",
        deletingingInfo: "节点删除中,请等待",
        upgradeFailed: "升级失败",
        addingNode: "添加节点中",
        restart: "重启",
        restartingInfo: "节点重启中，请等待",
        restartIndfo1: "重启共识节点可能导致链共识异常，请确认？",
        restartIndfo2: "确认节点重启?",
        initChainTimeout: "拉取镜像超时，请切换镜像拉取方式为手动",
        exportSdk: 'SDK证书下载',
        gmssl: '使用国密SSL时，需要将sdk证书放置于名为"gm"的文件夹',
        registerInfo: '注册信息',
        appIntroduction1: '应用文档',
        appTmp: '选择模板',
        appName: '应用名称',
        appDocLink: '文档链接',
        appDesc: '应用简介',
        appDetail: '应用详情',
        appIcon: '应用图标',
        creatApp: '新建应用',
        modifyApp: '修改应用',
        appLinkService: '应用链接',
        notRegister: '未注册',
        notAlive: '未存活',
        useTmp:'新建类型',
        process: '接入流程',
        registerDialogTitle:'查看注册信息',
        appTitleDev: '应用管理台改造（开发者）',
        appListTile: '应用列表',
        appTitleAdmin: '应用配置（管理员）',
        appStep11: '通过服务注册获得注册信息，并通过API向WeBASE注册服务',
        appStep12: '通过WeBASE提供的基础能力API和WeBASE连通',
        appStep21: '添加应用',
        appStep22: '启动应用插件',
        appStepTag1: '链上账号信息',
        appStepTag2: '链信息和链配置',
        appStepTag3: '管理账号',
        appStepTag4: '合约',
        appDescContent: '应用管理功能是WeBASE管理台提供的一种应用管理插件接入功能——WeBASE提供应用管理功能菜单，并提供接入通用性规范。各个应用可以按照接入规范注册到WeBASE管理台，以此来实现WeBASE和各应用之间从用户，区块链账户，基础配置，合约等方面实现连通。',
        copyInfo: '复制信息',
        imgSize: '每次只能上传一张图片,尺寸为80*80px，支持PNG、JPG格式，大小不能超过200KB',
        imgSize200k: '上传图片大小不能超过 200kb!',
        imgSize80px: '上传图片尺寸80*80px',
        decimal: "十进制私钥",
        decimalType: "十进制",
        hexType: "十六进制",
        exportWeid: "支持在WeID中导入",
        title: "提示",
        totalUser: '全量用户',
        normalUser: '已登记用户',
        unregisteredUser: '未登记用户',
        totalContract: '全量合约',
        normalContract: '已登记合约',
        unregisteredContract: '未登记合约',
        checkData: '查看',
        closeSign:"私钥不允许传输",
        textInfo: '描述长度在120字符以内',
        appInfo1: 'IP供参考，可以具体应用处修改。',
        appInfo2: '请点击“应用文档”参考进行注册应用操作。',
        versionError: 'Solc版本加载失败，请检查/static/js目录中是否存在对应的合约版本',
        exportJavaProject: "导出java项目",
        exportJavaProjectInfo1: '请选择相关合约导出生成java项目',
        exportJavaProjectInfo2: '注意：已编译的合约才能用于导出Java项目',
        projectName: "项目名称",
        projectGroupName: '包名',
        projectUser: '用户',
        projectFront: '节点',
        projectContract: '选择合约',
        compileStatus: '编译状态',
        compiled: '已编译',
        uncomplie: '未编译',
        projectFolder: '文件夹名',
        importSuccessed: '导入成功',
        exportSuccessed: '导出成功',
        updateSuccess: '成功',
        actualChannelIp: '根据实际channelIp修改',
        projectTitle: '项目信息',
        haveAbi: 'abi信息不能为空',
        haveSelectionAll: '合约全未编译',
        haveCertSdk: '获取SDK证书失败，请检查证书文件',
        haveChannelPort: '根据节点前置对应channelPort填入',
        importContractTip: '交易解析功能需要在合约IDE中编译交易对应合约',
        pass:'验证通过',
        no:'验证不通过',
        addContractAddress: '绑定'
    },
    rule: {
        textLong: "长度在 1 到 32 个字符",
        textLong1_12: "长度在 1 到 12 位",
        textLong1_62: "长度在 1 到 62 位",
        textLong1_100: "100个字符以内",
        textLong1_200: "长度在 1 到 200 个字符",
        textLong1_300: "长度在 1 到 300 个字符",
        textLong1_32767: "必须小于或等于32767",
        passwordError: "登录密码错误",
        loginPasswordType: "请正确输入密码",
        ipName: "请输入ip",
        ipRule: "ip不符合规则",
        portName: "请输入端口名称",
        portLong: "长度在 1 到 12 个数字",
        portRule: "端口请输入1-65535之内的数字",
        isPort: "请输入端口",
        agencyName: "请输入机构名称",
        agencyLong: "长度在 1 到 16 位",
        agencyRule: "机构名称请输入中文、英文和数字",
        adminRule: "请选择管理员账号",
        nodeType: "请选择节点类型",
        contractName: "请输入合约名称",
        contractAddress: "请输入合约地址",
        contractAbi: "请输入合约ABI",
        contractLong: "长度在 1 到 32 个字符",
        contractRule: "包含字母，数字和‘_’，以字母开头，不能以“_”结尾,如com_webank",
        contractGroupRule: "包含字母，数字和‘.’，以字母开头，不能以“.”结尾,如com.webank",
        IpRule: "请输入正确的IP",
        folderName: "请输入文件夹名称",
        folderLong: "长度在 1 到 12 个字符",
        folderRule: "请输入数字、字母或下划线",
        selectAdmin: "请选择管理员",
        sqlRule: "请输入sql",
        outUserAddress: "请选择外部账号地址",
        configName: "请选择配置名称",
        configValue: "请输入配置值",
        configValueNumber: "配置值必须为数字",
        accountRule: "用户名只能输入字母和数字",
        passwordLong: "长度在 6 到 12 个字符",
        passwordRule: "字母,数字组成,且至少包含一个大写字母和一个小写字母",
        groupTimestamp: "请输入创世块时间戳",
        nodeIdList: "请输入节点列表",
        number: "请输入数字",
        groupId: "请输入群组编号",
        correctJson: "输入正确的JSON",
        targetNode: "请选择目标节点",
        ipSame: "ip不能相同",
        selectGroup: "请选择群组",
        selctDockerImageType: "请选择docker镜像拉取方式",
        fromUserRule: "请选择账号",
        userRule: "请选择账号",
        thresholdRule: "请输入阈值",
        weightRule: "请输入权重",
        eventName: '请选择事件名',
        fromBlock: "请输入起始区块",
        toBlock: "请输入末区块",
        blockNumber: "值需要大于0",
        inputIsNumber: '输入不是数字',
        inputIsAddress: '输入不是Address',
        inputIsJson: '输入不是JSON',
        appNameRule: "请输入应用名",
        appDocLinkRule: "请输入应用文档链接",
        appDescRule: "请输入应用简介", 
        appDetailRule: "请输入应用详情",
        appLinkDocRule: "请正确输入链接如：http/https开头",
        artifactName: '请输入项目名称',
        group: '请输入包名称',
        frontId: '请选择节点',
        checkContract: '请选择合约'
    },
    head: {
        helpText: "帮助文档",
        group: "群组",
        changePassword: "修改密码",
        exit: "退出",
        versionInfo: "版本信息",
    },
    title: {
        dataOverview: "数据概览",
        blockTitle: "区块信息",
        nodeTitle: "节点管理",
        contractTitle: "合约管理",
        contractIDE: "合约IDE",
        contractList: "合约列表",
        CNSmanager: "CNS查询",
        CNSTips: "CNS查询说明：合约命名服务CNS通过提供链上合约名称与合约地址映射关系的记录及相应的查询功能，方便调用者通过记忆简单的合约名来实现对链上合约的调用。",
        CRUDTips: "CRUD说明：CRUD(增删改查)可以创建表，对表进行增删改查操作。Tips：如果启用了部署和建表权限，建表操作需要部署和建表权限。删除和修改表操作需要该表的表权限。",
        CRUDServiceManagement: "CRUD",
        PrivateKey: "私钥管理",
        systemManager: "系统管理",
        permission: "权限管理",
        permissionTips: "管理权限说明：权限控制是基于外部账户(tx.origin)的访问机制，对包括合约部署，表的创建，表的写操作（插入、更新和删除）进行权限控制，表的读操作不受权限控制。",
        permissionHref: "具体可见文档：[权限控制]",
        configManager: "配置管理",
        configManagerTips: "系统配置管理说明：系统配置可以配置系统属性值（目前支持tx_count_limit和tx_gas_limit属性的设置）。",
        certificate: "证书管理",
        accountManagement: "账户管理",
        transactionAudit: "交易审计",
        userTransaction: "用户交易",
        unusualUser: "异常用户",
        unusualContract: "异常合约",
        transactionInfo: "交易信息",
        systemMonitor: "系统监控",
        nodesMonitor: "节点监控",
        hostMonitor: "主机监控",
        emailAlarm: "邮件告警配置",
        emailAlarmType: "告警类型配置",
        restore: '还原',
        zoom: '区域缩放',
        back: '区域缩放还原',
        stack: '堆叠',
        tiled: '平铺',
        subscribeEvent: '订阅事件',
        blockEvent: '出块事件',
        contractEvent: '合约事件',
        groupManagement: '群组管理',
        abiList: 'ABI列表',
        parseAbi: 'ABI编码',
        uploadSolc: '上传不同版本编译器',
        otherUser: '无用户名的用户或公钥用户为外部管理员账户',
        committeeMgmt: '委员会管理',
        developerMgmt: '运维账号管理',
        checkEvent: 'Event查看',
        checkEventResult: 'Event',
        eventName: '合约event名',
        onlineTools: '在线工具',
        contractWarehouse: '合约仓库',
        toolsContract: '工具合约',
        directory: '目录',
        mgmtCns: "管理CNS",
        externalAccount: '链上用户',
        externalContract: '链上合约',
        appManagement: "应用管理",
        toolsContract: '工具合约',
        selectDirectory: '选择目录'
    },
    home: {
        nodes: "节点个数",
        contracts: "已部署的智能合约",
        blocks: "区块数量",
        transactions: "交易数量",
        nodeId: "节点Id",
        blockHeight: "块高",
        pbftView: "pbftView",
        status: "状态",
        block: "区块",
        transaction: "交易",
        tranfer: "出块者",
        more: "更多",
        run: "运行",
        unusual: "异常",
        chartTitle: "关键监控指标",
        chartExplain: "最近有交易的7天交易量（笔）",
        chartTransactions: "交易量",
        blockHash: "区块哈希",
        createTime: "创建时间",
    },
    nodes: {
        nodeFront: "节点前置",
        addFront: "新增节点前置",
        frontId: "前置编号",
        ip: "ip",
        frontPort: "前置端口",
        agency: "所属机构",
        modifyTime: "修改时间",
        nodeStyle: "节点类型",
        operation: "操作",
        sealer: "共识",
        observer: "观察",
        remove: "游离",
        deleteNode: "删除节点",
        nodeList: "节点列表",
        nodeDescription: "节点管理说明：可以通过节点管理设置节点类型。包括：1、根据节点NodeID设置对应节点为共识节点。2、 根据节点NodeID设置对应节点为观察节点。3、根据节点NodeID设置对应节点为游离节点。",
        updateNodesType: "修改节点类型",
        frontConfig: "节点前置配置",
        addFrontSuccessMsg: "添加前置成功",
        addFrontErrMsg: "添加前置失败",
        admin: "私钥用户",
        observerText: "设置为观察节点，节点将不参与共识。请确认操作",
        removeText: "设置为游离节点，节点将不参与共识和同步。请确认操作",
        sealerText: "设置为共识节点，节点将参与共识。请确认操作",
        version: "节点版本",
        addGroup: "创建群组",
        groupId: "群组编号",
        groupName: "群组名称",
        nodeCount: "节点数量",
        createTime: "创建时间",
        nodeId: "节点编号",
        frontIp: "前置IP",
        modifyGroup: "修改群组",
        addAbi: "导入ABI",
        updateAbi: "更新ABI",
        groupStatus: "群组状态",
        status: "状态",
        groupTimestamp: "创世块时间戳",
        failCreatGroup: "生成群组失败",
        failStartGroup: "启动群组失败",
        addHadGroup: "加入已有群组",
        targetNode: "目标节点",
        sealerNodeList: "共识节点列表",
        guideTitle: "构建区块链网络流程",
        deployButton: "点击部署按钮",
        blockChainButton: "填写区块链信息",
        guidetep1: "弹出部署区块链弹窗。当链存在时，此按钮不显示",
        guidetep2: "选择区块链版本，填写WeBASE-Sign的地址，最后再填写主机信息：包括主机IP，主机部署节点数量，主机所属机构，节点所属群组和区块链数据存储目录。",
        guidetep3: "点击弹窗“开始部署”按钮，区块链部署时间较长，请耐心等待。",
        startSuccess: "启动命令已执行",
        stopSuccess: "停止成功",
        initialize: "初始化",
        upgrading: "升级中",
        inputAgency: "请输入所属机构",
        inputNodes: "请输入节点数量",
        addNodeSuccess: "新增节点成功",
        chainConfig: "区块链配置",
        chainVersion: "Docker 镜像版本",
        newVersion: "获取最新版本",
        webaseSignAdr: "WeBASE-Sign的地址",
        addressError: "地址格式不正确",
        webaseSghAdrInfo: "WeBASE-Sign的地址，例：127.0.0.1:6004",
        hostList: "主机列表",
        inputHostIp: "请输入主机IP地址",
        ipError: "IP格式不正确",
        hostIp: "主机IP地址",
        inputNodesNumber: "请输入部署节点数量",
        thanOne: "必须大于1",
        NodesNumber: "部署节点数量",
        inputHostAgency: "请输入主机所属机构",
        noWhitespace: "不能含有空格",
        hostAgency: "主机所属机构",
        nodesGroup: "请输入节点所属群组",
        nodesGroupInfo: "节点所属群组",
        chainDirectory: "区块链数据存储目录",
        inputChainDirectory: "请输入区块链数据存储目录",
        startDeploy: "开始部署",
        deploying: "区块链正在部署",
        selectGroup: "选择群组",
        selectVersion: "选择版本",
        selectVersionInfo: "请选择区块链版本",
        upgraded: "正在升级，请稍等",
        deleteErrorInfo1: "如果节点是主机最后一个节点，是否删除主机",
        deleteErrorInfo2: "如果节点是机构最后一个节点，是否删除机构信息",
        dleteNodeSuccess: "删除节点成功",
        dockerRefresh: "Docker 镜像列表已刷新",
        nodesNumber: "部署时节点个数不能少于2个",
        chainStatus: "链状态",
        starting: "启动中",
        notice: "注意：确保群组至少有两个共识节点，如果少于2个，将会报错。",
        addContract: "导入合约",
    },
    contracts: {
        createFile: "新建文件",
        createFolder: "新建文件夹",
        upLoadFile: "上传文件",
        contractTips: "群组内部署的合约都需要在合约管理里添加，编译保存，否则会判断为异常合约。",
        rename: "重命名",
        contractCompileSuccess: "合约编译成功！",
        contractCompileFail: "合约编译失败！",
        renameFail: "已部署的合约不能重新命名！",
        nameFail: "同目录下存在相同的合约，请重新命名!",
        contractLong: "请输入数字或字母,长度为1到32位！",
        contractSize: "文件大小超过400k，请上传小于400k的文件!",
        contractType: "请上传.sol格式的文件!",
        contractNameSameFail: "同一目录下不能存在同名合约!",
        contractSaveSuccess: "合约保存成功！",
        contractDeleteFail: "文件夹内存在已部署的合约，无法删除文件夹!",
        contractSaveTips: "按Ctrl+s保存合约内容",
        contractOpenTips: "请在左侧面板",
        createContractTips: "点击打开一个合约",
        uploadContractTips: "或新建一个合约",
        sendTransaction: "发送交易",
        changeUser: "选择用户",
        compileSuccess: "< 编译成功！",
        conmileNameError: "合约名和文件名要保持一致!",
        deploySuccess: "< 部署成功！",
        contractDeploySuccess: "合约部署成功！",
        contractName: "合约名称",
        filePath: "文件目录",
        folderName: "文件夹名称",
        folderSameFail: "新建文件夹与已存在的文件夹名称相同",
        user: "用户",
        params: "参数",
        paramsInfo: '如果参数类型是数组，请按照以下格式输入，以逗号分隔，非数值和布尔值须使用双引号，例如：["aaa","bbb"]和[100,101]；如果数组参数包含双引号，需转义，例如：["aaa\\"bbb","ccc"]。',
        contractAddress: "合约地址",
        method: "方法",
        contractAddressInput: "请输入合约地址",
        contractAddressInfo: "选填项，导入已部署的合约地址。",
        selectUser: "请选择用户",
        methodType: "方法类型",
        methodName: "方法名",
        contractCatalogue: "合约目录",
        copyContractAddress: "复制合约地址",
        contractAbi: "合约abi",
        contractBin: "合约bin",
        runtimeBin: "Runtime-bin",
        copyContractAbi: "复制合约abi",
        copyContractBin: "复制合约bin",
        abiInfo: "abi详情",
        contractVersion: "合约版本",
        adminUser: '管理员账号',
        createTable: "创建表",
        insertTable: "插入表记录",
        searchTable: "查询表记录",
        updateTable: "更新表记录",
        deleteTable: "删除表记录",
        tableDetail: "显示表详情",
        addPrivateKeyInfo: "请添加私钥用户!",
        updateAbi: "更新",
        deleteAbi: "删除",
        limit_1: "每次最多只能上传一个文件",
        txResult: "交易内容",
        freeze: '冻结',
        unfreeze: '解冻',
        contractStatus: '合约状态',
        normal: "正常",
        freezeDes: '链委员和部署的用户才能冻结/解冻',
        userAddress: '用户地址',
        status: '状态',
        eventParam: '请严格按照event参数类型提示输入;例如 byte类型输入"0x"',
        exportSol: '导出',
        sureExport: '确认导出',
        transactionReceipt: '交易回执',
        limit_1: "每次最多只能上传一个文件",
        exportToIde: "导出到IDE",
        folder: "目录",
        cnsTitle: "链上CNS查询",
        localCnsTitle: "本地CNS",
        checkNodeActive: "验证节点存活"
    },
    privateKey: {
        addUser: "新增用户",
        importPrivateKey: "导入私钥",
        addUserTips: "群组内发送交易的账号都需要在私钥管理里添加，否则会判断为异常用户。",
        searchUser: "请输入用户名或公钥地址",
        copyPublicKey: "复制公钥",
        privateKey: "私钥",
        publicKey: "公钥",
        createUser: "新建用户",
        userName: "用户名称",
        userId: "用户ID",
        description: "用户描述",
        userAddress: "用户公钥地址信息",
        userStatus: "用户状态",
        inputDescription: "请输入用户描述",
        updateUserSuccess: "修改用户成功",
        normal: "正常",
        disable: "停用",
        privateKeyUser: "私钥用户",
        publicKeyUser: "公钥用户",
        publicKeyInfo: "公钥信息",
        inputUserName: "请输入用户名称",
        inputPublicInfo: "请输入公钥信息或公钥地址",
        userLong: "120个字符以内",
        inputPublic: "请输入公钥信息",
        addUserSuccess: "添加用户成功！",
        addUserFail: "添加用户失败！",
        signUserId: 'Sign User Id',
        inputFileName: "请输入私钥用户名",
        inputFileType: "请选择文件类型",
        fileName: "私钥用户名",
        fileType: "文件类型",
        importFile: "选择文件",
        copy: "复制",
        password: "密码",
        placeholderPassword: "请输入密码",
        passwordError: "密码不能是汉字",
        file: "文件",
        thaw: "解冻",
        freeze: "冻结",
        validatorPrivateKey: "请输入私钥",
        validatorPrivateKey16: "请输入十六进制私钥（不含0x）",
        validatorPrivateKey1: "请输入十六进制",
        validatorPrivateKey10: "请输入十进制",
        importType: "导入类型",
        importFileValidator: '请上传文件'
    },
    system: {
        chainManager: "链管理权限",
        addChainManager: "添加链管理权限",
        copyAddress: "复制地址",
        commonManager: "普通管理权限",
        chainAdministrator: "链管理员",
        submit: "提交",
        tableName: "表名称",
        userAddress: "账号地址",
        userName: "账号名称",
        deployAndCreate: "部署与建表权限",
        cns: "CNS权限",
        sysConfig: "系统配置权限",
        node: "节点权限",
        confirmPermission: "添加第一个管理员权限的时候，管理员将启动权限，请确认账号是否正确。误操作可能导致服务不可用。",
        dialogTips: "tips: 公钥用户无法授权其它用户",
        outUserAddress: "外部账号地址",
        inputUser: "请输入帐号",
        authorizedSuccess: "授权成功",
        deleteSuccess: "删除成功",
        configContent1: "不建议随意修改tx_count_limit和tx_gas_limit，如下情况可修改这些参数",
        configContent2: "机器网络或CPU等硬件性能有限：调小tx_count_limit，或降低业务压力",
        configContent3: "业务逻辑太复杂，执行区块时gas不足：调大tx_gas_limit。",
        updateConfig: "修改配置值",
        configKey: "配置名称",
        configValue: "配置值",
        gasLimit: "一个交易最大gas限制",
        countLimit: "一个区块中可打包的最大交易数目",
        gasLong: "范围从100000到2147483647",
        addCertificate: "导入证书",
        export: "导出",
        import: "导入",
        certName: "证书名称",
        certType: "证书类型",
        fingerPrint: "指纹",
        father: "父级指纹",
        address: "地址",
        validityFrom: "有效期",
        fileSize: "上传文件大小不能超过 100kb!",
        importSuccess: "导入成功",
        uploadWarning1: "当前限制选择 10 个文件，本次选择了",
        uploadWarning2: "个文件，共选择了",
        uploadWarning3: "个文件.",
        to: "至",
        updateSuccess: "更新成功",
    },
    account: {
        addAccount: "新增账号",
        user: "帐号",
        roleNameZh: "角色",
        createAccount: "创建账号",
        deleteAccount: "删除账号",
        updataAccount: "修改账号",
        email: "邮箱",
        inputEmail: "请输入邮箱",
        emailTypeError: "邮箱格式不正确"
    },
    transaction: {
        time: "时长",
        interface: "接口",
        week: "最近一周",
        month: "最近一个月",
        threeMonth: "最近三个月",
        regulatoryUser: "获取监管用户列表失败！",
        total: "当前总数量",
        stroke: "笔",
        unusualTips: "异常过多(大于等于20)，会停止审计。建议查看交易情况，找出异常原因后导入合约或用户来清理异常记录。",
        transactionTime: "最新交易时间",
        hash: "哈希",
        inputUser: "请输入用户",
        inputUserAddress: "请输入用户地址",
        startTime: "开始日期",
        endTime: "结束日期",
        unusualMoreTips: "异常过多，已经停止审计。建议查看交易情况，找出异常原因后导入合约或用户来清理异常记录。",
        transactionHash: "交易哈希",
        transactionSearchFail: "搜索交易哈希不支持模糊查询",
        toNull: "部署合约，to字段为空。",
        unresolved: "无法解析",
        reduction: "还原",
        searchTransactionFail: "无法查询到交易信息",
        decode: "解码"
    },
    monitor: {
        node: "节点",
        showDate: "显示日期",
        contrastDate: "对比日期",
        selectDate: "选择日期",
        startEndTime: "起止时间",
        timeRange: "选择时间范围",
        dataGranularity: "数据粒度",
        minute: "分钟",
        second: "秒钟",
        confirm: "确认",
        addFrontInfo: "添加前置信息",
        blockHeight: "区块高度",
        pendingCount: "待打包的交易数",
        dateFormat: "yyyy-MM-dd",
        dateLabel: "yyyy 年 MM 月 dd 日",
        startTime: "开始时间",
        endTime: "结束时间",
        utilizationRate: "利用率",
        RAM: "内存",
        hardDisk: "硬盘",
        txbps: "上行",
        rxbps: "下行",
        bandwidth: "带宽",
        contrastDateData: "对比日数据",
        noData: "未采集到数据或数据为0",
        showDateData: "显示日数据",
        nullData: "未获取到数据",
        hostInfo: "主机信息",
        nodeInfo: "节点信息",
        selectDate: "请选择显示日期和时间",
        blockSize: "平均块大小",
        blockCycle: "平均出块周期",
        tps: "平均TPS"
    },
    alarm: {
        alarmCofig: "告警配置",
        emailAlarmConfig: "邮件告警配置",
        emailAlarmConfigYips: "系统配置管理说明：系统配置可以配置系统属性值（目前支持tx_count_limit和tx_gas_limit属性的设置）。",
        agreementType: "协议类型",
        address: "地址",
        port: "端口",
        authentication: "鉴权",
        authenticationTips: "默认使用username/password进行验证，通过SSL/TLS连接邮箱服务",
        user: "用户",
        password: "密码",
        save: "保存",
        test: "测试",
        saveTips: "邮箱配置已修改，未保存，请点击保存按钮保存修改项。",
        serverTypeTips: "请输入服务类型",
        longSize: "长度在 1 到 32 个字符",
        notRule: "请输入数字、字母或下划线",
        enterAddress: "请输入地址",
        enterEmail: "请输入邮箱",
        enterEmailPsd: "请输入邮箱密码",
        enterFormat: "请输入编码格式",
        tip: "提示",
        send: "发送",
        cancel: "取消",
        emailTypeErr: "邮箱格式不正确",
        cancelEnter: "取消输入",
        sendEmailSuccess: "邮件发送成功！",
        updateEmailAlarmConfigSuccess: "修改告警邮箱配置成功！",
        enterSaveInfo: "请保存修改的配置信息！",
        alarmTypeConfig: "告警类型配置",
        enableAlarm: '是否启用告警',
        alarmCofigList: "告警配置列表",
        alarmEmailTile: "告警邮件标题",
        emailContent: "邮件模板",
        sendTime: "发送间隔时间",
        operation: "操作",
        update: "修改",
        disable: "禁用",
        enable: "启用",
        alarmLogList: "告警日志列表",
        alarmType: "告警类型",
        alarmLevel: "告警级别",
        high: "高",
        common: "一般",
        low: "低",
        alarmContent: "告警内容",
        alarmStatus: "告警状态",
        processed: "已处理",
        unprocessed: "未处理",
        alarmTime: "告警时间",
        modifyTime: "处理时间",
        confirm: "确认",
        start: "启动",
        sureHandle: "确定处理?",
        sure: "确定",
        logsSure: "该日志已确认",
        enableAlarm: "启用告警, 是否继续?",
        disableAlarm: "禁用告警, 是否继续?",
        addEmail: "请添加接收邮箱！",
        noAlarmEmail: "告警邮箱未设置！",
        disableAlarmSuccess: "禁用告警成功！",
        enableAlarmSuccess: "启用告警成功！",
        nodeAlarm: "节点告警",
        auditAlert: "审计告警",
        certAlert: "证书告警",
        hours: "小时",
        minute: "分钟",
        emailAlarmDetail: "告警配置详情",
        lastAlertTime: "上次告警时间",
        userList: "发送告警邮件邮箱",
        status: "状态",
        close: "关闭",
        alarmContentTip: "告警内容中大括号{}及其中内容不可更改",
        recipientEmail: "接收者邮箱",
        recipientEmailTip: "仅能选择已添加邮箱的用户",
        pleaseSlect: "请选择",
        alertIntervalSecondsTip: "选择框数值没有单位时单位是秒",
        halfHour: "半小时",
        date: "天",
        inputEmailTitle: "请输入告警邮箱标题",
        inputalarmContent: "请输入告警内容",
        selectIntervalSeconds: "请选择间隔时间",
        noEmail: "该用户没有邮箱，请在账号管理中添加邮箱！",
        updateAlarmSuccess: "修改告警配置成功！",
        groupTips: "非运行的群组会自动定时删除",
        refresh: "刷新"
    },
    guide: {
        guidePage: "引导页",
        addFront: "添加节点前置",
        addFrontTip1: "节点前置和节点绑定的一个java服务的中间件，集成web3jsdk，webase平台通过该服务连接节点。",
        addFrontTip2: "进入节点管理页面，点击新增节点前置，填写正确的ip和端口。",
        addFrontTip3: "注意：首次进入关掉此页面后会出现添加前置弹窗，在此弹窗添加前置即可。",
        addUser: "创建私钥用户",
        addUserTip1: "如果需要部署合约，测试交易，需要创建私钥用户。",
        addUserTip2: "点击私钥管理进入，选择私钥用户，输入用户名。",
        createContract: "创建合约",
        createContractTip1: "创建用户后，便可以新增或上传合约，然后编译、部署和发送交易。点击合约管理，合约IDE进入。",
        createContractTip2: "点击合约管理，点击合约IDE，点击按钮进行编写或上传合约，然后编译、部署和发送交易。"
    },
    main: {
        changePassword: "修改密码",
        oldPassword: "旧密码",
        newPassword: "新密码",
        confirmPassword: "确认密码",
        submit: "提交",
        reset: "重置",
        inputPassword: "请输入密码",
        againPassword: "请再次输入密码",
        passwordError: "两次输入密码不一致!",
        inputOldPassword: "请输入旧密码",
        longPassword: "长度在 6 到 12 个字符",
        passwordPattern: "字母,数字组成,且至少包含一个大写字母和一个小写字母",
        updatePsdSuccess: "密码修改成功",
        updatePsdError: "密码修改失败",
    },
    placeholder: {
        contractListSearch: '输入合约名或合约地址',
        selected: '请选择',
        selectedAccountAddress: '请选择用户地址',
        selectedNoUser: '没有用户，请去新建用户',
        input1_200: '请输入200字符以内的详情',
        input1_32: '请输入32字符以内的简介',
        input1_300: '请输入300字符以内的详情',
        input1_62: '请输入62字符以内的简介',
    },
    table: {
        contractAddress: '合约地址',
        contractAbi: '合约ABI',
        appId: "应用编号",
        exchangeName: "Exchange",
        queueName: "队列名",
        routingKey: "routingKey",
        groupId: "所属群组",
        fromBlock: '起始区块',
        toBlock: '末区块',
        topicList: '合约event',
        frontInfo: '所属前置',
        transactionReceipt: '交易回执',
        transactionInfo: '交易信息',
        checkEvent: 'Event 查看',
        checkEventResult: 'Event',
        eventName: 'Event名',
        blockHeight: '块高',
        eventValue: 'Event',
        contractName: '合约名',
        cnsVersion: 'cns版本号',
        fileType: "导入类型",
        exportType: "导出类型",
        fileName: "私钥用户名",
    },
    govCommittee: {
        addCommittee: '新增委员投票',
        modifyThreshold: '修改阈值投票',
        fromUser: '链委员',
        user: '新委员',
        address: '账户地址',
        weight: '权重',
        weightRatio: '权重比(%)',
        enableNum: '生效区块高度',
        modifyWeight: '修改权重投票',
        deleteCommittee: '撤销委员投票',
        votingList: '投票记录列表',
        id: '提议ID',
        governUserId: '发起账户',
        modifyUserId: '待修改账户',
        modifyUserAddress: '待修改地址',
        newValue: '更改值',
        voteType: '投票类型',
        voteStatus: '投票状态',
        updatetime: '发起时间',
        threshold: '阈值%',
        isDelete: '是否确认发起删除投票?',
        operate: '操作',
        agree: '同意',
        refuse: '拒绝',
        success: '成功',
        delete: '删除',
        blockNum: '当前块高',
        toCommittee: '待修改委员',
        revokeCommittee: '待撤销委员',
        committeeAndDeploy: '链委员和部署者',
        dialogTips: '外部私钥用户可以通过导入公钥或私钥进行设置。'
    },
    devOpsMgmt: {
        addDeveloper: '新增运维',
        deleteDev: '删除运维',
        deleteDeveloper: '删除',
        user: '账户',
        address: '账户地址',
        enableNum: '生效区块高度',
        operate: '操作',
        fromUser: '链委员',
        devAddress: '运维地址'
    },
    dialog: {
        cnsVersion: '请输入CNS版本',
        cnsVersionPattern: "数字字母和英文字母'.'组成",
        cnsName: '请输入CNS名称',
        length1_10: '长度在 1 到 10 个字符',
        privateKeyVerifyLength1_32: '长度在 1 到 32 个字符',
        addUsername: '添加用户名',
        pleaseEnterUserName: '请输入用户名',
        privateKeyVerifyLength: '长度在 3 到 32 个字符',
        privateKeyVerifyLength1_32: '长度在 1 到 32 个字符',
        privateKeyVerifyFont: '只能是数字或者字母组成',
        rename: '重命名',
        newFile: '新建',
        delete: '删除',
        exportJavaNote: '注意：合约名和文件名必须相同',
        cancel: '取 消',
        confirm: '确 认',
        sureExport: '确认导出',
        sureDelete: '确认删除',
        contractNameIllegal: '合约名不符合规则',
        folderNameIllegal: '文件名不符合规则',
        folderName: '文件夹名称',
        pleaseType: '请输入',
        appId: "请输入应用编号",
        exchangeName: "请输入交换名",
        queueName: "请输入队列名",
        groupId: "请选择群组",
        contractAbi: "请输入合约ABI",
        contractAddress: "请输入合约地址",
        fromBlock: "请输入起始区块",
        toBlock: "请输入末区块",
        topicList: "请输入合约event名列表",
        eventName: "请选择事件名",
        isContractAbi: "请输入合约Abi",
        search: '查看',
        exportSol: '导出合约',
        cnsVersion: '请输入CNS版本',
        cnsVersionPattern: "数字字母和英文字母'.'组成",
        cnsName: '请输入CNS名称',
        length1_10: '长度在 1 到 10 个字符',
        addContractAddress: '绑定合约地址',
    },
    onlineTools: {
        onlineHashCalculator: 'Hash计算器',
        algorithm: '算法',
        result: '结果',
        encryption: '加密',
        sign: '签名',
        text: '文本',
        file: '文件',
        drag: "将文件拖到此处，或",
        upload: "点击上传",
        uploadNumLimit: "只能上传一个文件",
    },
    progress: {
        0: '等待开始',
        1: '检测机器内存与依赖',
        2: '检测Docker服务',
        3: '检测端口占用',
        4: '初始化安装主机依赖',
        5: '初始化加载Docker镜像',
        6: '生成链证书与配置',
        7: '初始化链与前置数据',
        8: '传输链配置到主机',
        9: '配置完成，启动中'
    }
}