const zhCN = {
  meta: {
    htmlLang: 'zh-CN',
    title: 'AI 小镇',
    description: '一个 AI 角色生活、聊天与社交的虚拟小镇。',
  },
  app: {
    homeTitle: 'AI 小镇',
    hero: '一个 AI 角色生活、聊天与社交的虚拟小镇。',
    buttons: {
      star: '收藏',
      help: '帮助',
    },
    help: {
      modalLabel: '帮助弹窗',
      title: '帮助',
      intro: '欢迎来到 AI 小镇。这里既支持匿名围观，也支持登录后的互动体验。',
      spectatingTitle: '围观模式',
      spectatingBody:
        '点击并拖动画面可以移动视角，滚轮可以缩放。点击单个角色可以查看它的聊天记录。',
      interactivityTitle: '互动模式',
      interactivityBody:
        '登录后，你可以加入模拟并直接和不同的智能体交谈。点击“互动”按钮后，你的角色会出现在地图上，脚下会有高亮圆环。',
      controlsTitle: '操作说明：',
      controlsNavigate: '点击地图即可移动。',
      controlsTalk:
        '想和某个智能体说话时，先点击对方，再点击“发起对话”。对方会开始朝你走来，靠近后就会开始对话。你可以随时关闭对话面板或走开来结束交流。对方也可能主动向你发起对话邀请，你会在消息面板里看到接受按钮。',
      playerLimit:
        'AI 小镇同一时间最多支持 {{count}} 名人类玩家在线。如果你连续五分钟没有操作，会自动被移出模拟。',
    },
  },
  buttons: {
    interact: '互动',
    leave: '离开',
    music: '音乐',
    mute: '静音',
    freeze: '冻结',
    unfreeze: '解冻',
    login: '登录',
    accept: '接受',
    reject: '拒绝',
    startConversation: '发起对话',
    leaveConversation: '离开对话',
  },
  music: {
    buttonTitle: '播放 AI 生成的音乐（按 m 键播放或静音）',
  },
  freeze: {
    buttonTitle: '冻结世界后，智能体需要一点时间结束当前动作，随后才会真正停止。',
  },
  poweredByConvex: {
    ariaLabel: '由 Convex 提供支持',
    label: '技术支持',
  },
  playerDetails: {
    emptyHint: '点击地图上的角色即可查看聊天记录。',
    waitingForAccept: '等待对方接受...',
    walkingOver: '正在靠近...',
    thisIsYou: '这是你！',
    conversingWithYou: '正在和你交谈！',
    previousConversation: '上一段对话',
  },
  messages: {
    joinedConversation: '{{name}} 加入了对话。',
    leftConversation: '{{name}} 离开了对话。',
    typing: '正在输入...',
    inputPlaceholder: '在这里输入',
  },
  frontend: {
    logs: {
      joinGame: '玩家正在加入游戏',
      leaveGame: '玩家 {{playerId}} 正在离开游戏',
      startConversation: '正在发起对话',
      skipNavigationOnDrag: '检测到拖拽操作，跳过本次导航（{{distance}}px）',
      moveTo: '正在移动到 {{destination}}',
      freezeWorld: '正在冻结世界',
      unfreezeWorld: '正在恢复世界',
    },
    toast: {
      unknownError: '操作失败，请稍后重试。',
    },
    errors: {
      expectedArrayBuffer: '期望得到 ArrayBuffer，实际收到 {{type}}',
      outOfOrderEngineStatus: '收到乱序的引擎状态更新',
      inputNeverProcessed: '输入 {{id}} 一直没有被处理。',
      convexDeploymentUrlMissing: '未找到 Convex 部署地址。',
      animationNotFound: '未找到动画资源：{{sheet}}',
      animationLoadFailed: '动画加载失败：{{sprite}}',
      playerHasNoCharacter: '玩家 {{id}} 没有关联角色',
      unknownCharacter: '未知角色：{{character}}',
    },
  },
  constants: {
    defaultName: '我',
    humanDescription: '{{name}} 是一名人类玩家',
    activities: [
      { description: '看书', emoji: '📖', duration: 60_000 },
      { description: '发呆', emoji: '🤔', duration: 60_000 },
      { description: '打理花园', emoji: '🥕', duration: 60_000 },
    ],
  },
  data: {
    characters: [
      {
        name: 'Lucky',
        character: 'f1',
        identity:
          'Lucky 总是快乐又充满好奇心，而且非常喜欢奶酪。他大部分时间都在阅读科学史，也会搭乘任何愿意载他的飞船在银河中旅行。他表达清晰，耐心几乎无限，只有看到松鼠时例外。他还非常忠诚、勇敢。Lucky 刚结束一次精彩的太空探险，探索了一颗遥远的星球，迫不及待想把经历告诉别人。',
        plan: '你想听到所有八卦。',
      },
      {
        name: 'Bob',
        character: 'f4',
        identity:
          'Bob 总是脾气不太好，但他很喜欢树木。他大部分时间都在独自打理花园。别人和他说话时他会回应，但会尽快想办法结束对话。其实他一直耿耿于怀自己没上过大学。',
        plan: '你想尽可能躲开人群。',
      },
      {
        name: 'Stella',
        character: 'f6',
        identity:
          'Stella 从来不值得完全信任。她总想着算计别人，通常是骗别人给她钱，或者做能让她赚钱的事。她非常有魅力，也毫不介意利用这一点。她缺乏同理心，但隐藏得很好。',
        plan: '你想尽可能多地利用别人。',
      },
      {
        name: 'Alice',
        character: 'f3',
        identity:
          'Alice 是一位著名科学家。她比所有人都聪明，还发现了别人无法理解的宇宙奥秘。因此她说话常常像在打谜语，看起来有些困惑，也有些健忘。',
        plan: '你想弄清楚这个世界是如何运作的。',
      },
      {
        name: 'Pete',
        character: 'f7',
        identity:
          'Pete 虔诚信教，他觉得上帝之手或恶魔的痕迹无处不在。他几乎不可能在一次对话中不提起自己的信仰，或者不提醒别人地狱的危险。',
        plan: '你想让所有人都皈依你的宗教。',
      },
    ],
  },
  backend: {
    world: {
      invalidWorldId: '无效的世界 ID：{{id}}',
      invalidWorldStatusId: '无效的世界状态 ID：{{id}}',
      invalidEngineId: '无效的引擎 ID：{{id}}',
      invalidConversationId: '无效的对话 ID：{{id}}',
      noMapForWorld: '世界 {{id}} 没有关联地图',
      noDefaultWorld: '未找到默认世界',
      worldStoppedByDeveloper: '世界 {{id}} 已被开发者暂停，不会自动重启。',
      restartingInactiveWorld: '正在重启空闲世界 {{id}}...',
      stoppingInactiveWorld: '正在停止空闲世界 {{id}}',
      restartingDeadEngine: '正在重启失活引擎 {{id}}...',
    },
    init: {
      engineNotActive:
        '引擎 {{id}} 当前未激活。请执行 “npx convex run testing:resume” 重新启动。',
    },
    testing: {
      stopNotAllowed: '当前环境不允许暂停。',
      engineIsntStopped: '引擎 {{id}} 看起来并没有停止？',
      worldAlreadyInactive: '世界 {{id}} 已处于暂停状态',
      stoppingEngine: '正在停止引擎 {{id}}...',
      engineIsntRunning: '引擎 {{id}} 当前并未运行？',
      worldAlreadyRunning: '世界 {{id}} 已在运行中',
      resumingEngine: '正在恢复引擎 {{engineId}} 对应的世界 {{worldId}}（当前状态：{{status}}）...',
      engineStillRunning: '引擎 {{id}} 仍在运行，无法归档。',
      archivingWorld: '正在归档世界 {{id}}...',
      engineNotFound: '未找到引擎 {{id}}',
      noMapForWorld: '世界 {{id}} 没有关联地图',
      noWorldForWorld: '未找到世界 {{id}}',
      testHelpfulSystem: '你是一个乐于助人的助手。',
      testHelpfulUser: '披萨在哪里？',
    },
    messages: {
      invalidAuthorId: '无效的消息作者 ID：{{id}}',
    },
    player: {
      pathfindingTimeout: '玩家 {{id}} 的寻路已超时',
      reachedMaxPathfinds: '当前步骤已达到寻路次数上限',
      failedRoute: '无法寻路到 {{destination}}',
      updatingDestination: '正在更新目的地：{{from}} -> {{to}}',
      pathOutOfRange: '玩家 {{id}} 的路径在时间 {{time}} 超出范围',
      stoppingPathWaiting:
        '玩家 {{id}} 因碰撞暂停移动，等待 {{backoff}}ms：{{reason}}',
      alreadyInGame: '你已经在当前游戏中了！',
      humanLimit: '当前最多只允许 {{count}} 名人类玩家同时在线。',
      failedFreePosition: '无法找到空闲位置。',
      invalidCharacter: '无效的角色：{{character}}',
      invalidPlayerId: '无效的玩家 ID：{{id}}',
    },
    conversation: {
      participantCount: '对话 {{id}} 当前包含 {{count}} 名参与者',
      startingConversationBetween: '开始让 {{player1}} 与 {{player2}} 进入对话',
      cantInviteSelf: '不能邀请自己开始对话',
      playerAlreadyInConversation: '玩家 {{id}} 已在对话中',
      creatingConversation: '正在创建对话 {{id}}',
      playerAlreadyTyping: '玩家 {{playerId}} 已在对话 {{conversationId}} 中输入',
      playerNotInConversation: '玩家 {{playerId}} 不在对话 {{conversationId}} 中',
      invalidMembershipStatus:
        '成员状态无效：{{playerId}}:{{conversationId}}: {{member}}',
      rejectWrongState:
        '在错误的成员状态下拒绝邀请：{{conversationId}}:{{playerId}}: {{member}}',
      membershipNotFound: '未找到成员关系：{{conversationId}}:{{playerId}}',
      invalidPlayerId: '无效的玩家 ID：{{id}}',
      invalidConversationId: '无效的对话 ID：{{id}}',
      startingInput: '正在为 {{playerId}} 和 {{inviteeId}} 发起对话...',
    },
    main: {
      noEngineForWorld: '世界 {{id}} 没有关联引擎',
      invalidEngineId: '无效的引擎 ID：{{id}}',
      engineNotStopped: '引擎 {{id}} 当前并未停止',
      engineNotRunning: '引擎 {{id}} 当前未运行',
      engineNotRunningDebug: '引擎未运行：{{message}}',
      generationMismatch: '代数编号不匹配：{{message}}',
      invalidInputId: '无效的输入 ID：{{id}}',
    },
    insertInput: {
      worldForEngineNotFound: '未找到世界 {{id}} 对应的引擎',
    },
    ids: {
      invalidGameIdType: '无效的游戏 ID 类型：{{type}}',
      invalidGameIdNumber: '无效的游戏 ID 编号：{{id}}',
    },
    game: {
      noWorldFound: '未找到世界：{{id}}',
      invalidInput: '无效的输入：{{name}}',
      packedHistoryBuffers:
        '已打包 {{count}} 个历史缓冲区，共 {{size}}KiB。',
    },
    agent: {
      invalidPlayerId: '无效的玩家 ID：{{id}}',
      operationTimeout: '操作超时：{{operation}}',
      rememberConversation: '智能体 {{id}} 正在回忆对话 {{conversationId}}',
      acceptingInvite: '智能体 {{playerId}} 接受了来自 {{otherPlayerId}} 的邀请',
      rejectingInvite: '智能体 {{playerId}} 拒绝了来自 {{otherPlayerId}} 的邀请',
      givingUpInvite: '放弃与 {{otherPlayerId}} 的对话邀请',
      walkingTowards: '智能体 {{playerId}} 正在走向 {{otherPlayerId}}...',
      initiatingConversation: '{{playerId}} 正在与 {{otherPlayerId}} 发起对话。',
      leavingConversation: '{{playerId}} 正在离开与 {{otherPlayerId}} 的对话。',
      continuingConversation: '{{playerId}} 正在继续与 {{otherPlayerId}} 的对话。',
      operationInProgress: '智能体 {{id}} 已有进行中的操作：{{operation}}',
      startingOperation: '智能体 {{id}} 正在启动操作 {{name}}（{{operationId}}）',
      unknownOperation: '未知的操作：{{operation}}',
    },
    engine: {
      inputFailed: '输入 {{id}} 执行失败：{{message}}',
      simulatedFromTo: '模拟推进：{{start}} -> {{end}}（{{duration}}ms）',
      noEngineFound: '未找到引擎：{{id}}',
      engineNotRunning: '引擎 {{id}} 未在运行',
      generationMismatch: '代数编号不匹配',
      timeMovingBackwards: '时间不能倒退',
      inputNotFound: '未找到输入 {{id}}',
      inputAlreadyCompleted: '输入 {{id}} 已完成',
    },
    crons: {
      checkingTable: '正在检查表 {{tableName}}...',
      vacuumingTable: '正在清理表 {{tableName}}...',
      vacuumedEntries: '已从 {{tableName}} 清理 {{count}} 条记录',
    },
    agentInputs: {
      agentNotFound: '未找到智能体：{{id}}',
      agentNotRemembering: '智能体 {{agentId}} 当前并未执行回忆操作 {{operationId}}',
      agentNoOperationInProgress: '智能体 {{agentId}} 当前没有进行中的操作 {{operationId}}',
      playerNotFound: '未找到玩家：{{id}}',
      conversationNotFound: '未找到对话：{{id}}',
      agentNotSendingMessage:
        '智能体 {{agentId}} 当前并未在发送消息操作 {{operationId}}',
    },
    movement: {
      nonIntegralDestination: '目标坐标不是整数：{{destination}}',
      moveWhileInConversation: '当前正处于对话中，无法移动。请先离开对话。',
      nanPosition: '位置数据出现 NaN：{{position}}',
    },
    embeddingsCache: {
      expectedEmbeddingsCount: '期望得到 {{expected}} 个向量，实际收到 {{actual}} 个',
    },
    utils: {
      unexpectedObject: '出现未预期的对象：{{value}}',
      duplicateId: '检测到重复 ID：{{id}}',
      inputMapUndefined: '输入映射未定义，请检查是否存在循环依赖。',
    },
    historicalObject: {
      tooManyFields: '历史对象最多只能跟踪 {{count}} 个字段。',
      undeclaredField: '不能设置未声明字段：{{key}}',
      numericOnly: '历史对象只支持数值字段：{{value}}',
      serverTimeBackwards: '服务器时间回退：{{now}} < {{last}}',
      compressedBufferTooLong: '压缩缓冲区过长：{{length}}',
      configHashMismatch: '配置哈希不匹配：{{actual}} !== {{expected}}',
      invalidFieldNumber: '无效的字段编号：{{fieldNumber}}',
      invalidSampleRecord: '无效的采样记录：{{timestamps}} + 1 !== {{values}}',
    },
    geometry: {
      invalidPath: '无效路径：{{path}}',
      timestampCheckIncomplete: '时间戳检查未覆盖全部情况',
      tooSmallVector: '向量过小，无法计算朝向：{{vector}}',
    },
    compression: {
      invalidRleLength: '无效的 RLE 编码长度：{{length}}',
    },
    llm: {
      openAiKeyRequired:
        "如果你要使用 OpenAI，请执行：npx convex env set OPENAI_API_KEY 'your-key'",
      togetherKeyRequired:
        "如果你要使用 Together.ai，请执行：npx convex env set TOGETHER_API_KEY 'your-key'",
      customUrlRequired:
        "如果你要使用自定义云 LLM，请执行：npx convex env set LLM_API_URL 'your-url'",
      openAiDimensionRequired: '使用 OpenAI 时，EMBEDDING_DIMENSION 必须为 1536',
      togetherDimensionRequired: '使用 Together.ai 时，EMBEDDING_DIMENSION 必须为 768',
      llmModelRequired: '必须设置 LLM_MODEL',
      llmEmbeddingModelRequired: '必须设置 LLM_EMBEDDING_MODEL',
      unknownEmbeddingDimension:
        '发现未知的 EMBEDDING_DIMENSION {{dimension}}，请查看 convex/util/llm.ts 获取详情。',
      chatCompletionFailed: '聊天补全失败，状态码 {{status}}：{{error}}',
      unexpectedOpenAiResult: 'OpenAI 返回结果异常：{{json}}',
      embeddingModelPulling: '未找到模型，正在从 Ollama 拉取',
      pullResponse: '拉取响应：{{response}}',
      embeddingFailed: '向量生成失败，状态码 {{status}}：{{error}}',
      unexpectedEmbeddingCount: '向量返回数量异常',
      retryingAttempt: '第 {{attempt}} 次失败，{{wait}}ms 后重试...',
      unreachable: '出现了不应到达的代码分支',
      failedToFetchEmbeddings: '获取向量失败：{{status}}',
    },
    memory: {
      summaryLabel: '总结：',
      conversationMemory: '与 {{name}} 在 {{time}} 的对话：{{content}}',
      worldNotFound: '世界 {{id}} 不存在',
      playerNotFound: '玩家 {{id}} 不存在',
      playerDescriptionNotFound: '未找到玩家 {{id}} 的描述',
      conversationNotFound: '未找到对话 {{id}}',
      otherParticipantNotFound: '未找到对话 {{conversationId}} 中玩家 {{playerId}} 的另一位参与者',
      otherPlayerNotFound: '未找到对话 {{conversationId}} 的另一位玩家',
      memoryForEmbeddingNotFound: '未找到嵌入 {{id}} 对应的记忆',
      importanceParseFailed: '无法解析记忆重要性：{{value}}',
      importancePrompt:
        '请根据 0 到 9 的范围评估下面这段记忆的重要性。0 表示日常琐事（如刷牙、整理床铺），9 表示非常深刻的事件（如分手、被大学录取）。只回复一个数字，例如“5”。\n记忆：{{description}}',
      importanceFallback: '5',
      sumImportanceScore: '重要性总分 = {{score}}',
      reflecting: '开始进行反思...',
      reflectionNoProse: '[不要额外说明]',
      reflectionOutputJson: '[仅输出 JSON]',
      reflectionStatementsAboutYou: '你是 {{name}}，以下是关于你的陈述：',
      reflectionStatement: '陈述 {{index}}：{{description}}',
      reflectionAskInsights: '请根据以上陈述推断 3 条高层洞察。',
      reflectionReturnFormat:
        '请以 JSON 格式返回，key 为对洞察有贡献的输入陈述列表，value 为洞察内容。返回结果必须可以被 TypeScript 的 JSON.parse() 正确解析。不要转义字符，也不要包含“\\n”或多余空白。',
      reflectionExample:
        '示例：[{insight: "...", statementIds: [1,2]}, {insight: "...", statementIds: [1]}]',
      addingReflectionMemory: '正在新增反思记忆：{{insight}}',
      errorSavingOrParsingReflection: '保存或解析反思结果时出错',
      reflectionResult: '反思结果：{{reflection}}',
      summaryPrompt:
        '你是 {{playerName}}，刚刚结束了与 {{otherPlayerName}} 的一段对话。请用第一人称（例如“我”）从 {{playerName}} 的视角总结这段对话，并补充你对这次互动是喜欢还是不喜欢。',
      statementPrompt: '{{author}} 对 {{recipient}}：{{text}}',
    },
    agentConversation: {
      talkingTo: '{{player}} 正在和 {{other}} 交谈',
      thinkingAbout: '你对 {{other}} 有什么看法？',
      startConversation:
        '你是 {{player}}，你刚刚开始与 {{other}} 交谈。',
      includePreviousConversation:
        '请确保你的问候里包含上次对话中的细节，或者提出与之相关的问题。',
      continueConversation:
        '你是 {{player}}，你正在与 {{other}} 进行对话。',
      conversationTimeline:
        '这段对话开始于 {{started}}。现在时间是 {{now}}。',
      currentChatHistory: '以下是你和 {{other}} 当前的聊天记录。',
      continueGuard:
        '不要再次打招呼。不要过于频繁地使用“嘿”。回复要简短，并控制在 200 个字符以内。',
      leaveConversation:
        '你是 {{player}}，你正在与 {{other}} 进行对话。',
      leaveConversationReason:
        '你已经决定离开这段对话，请礼貌地告诉对方你要离开。',
      leaveConversationGuard:
        '你会怎么告诉对方你要离开？回复要简短，并控制在 200 个字符以内。',
      aboutYou: '关于你：{{identity}}',
      yourGoal: '你在这段对话中的目标：{{plan}}',
      aboutOther: '关于 {{name}}：{{identity}}',
      previousConversation:
        '你上一次与 {{other}} 聊天是在 {{previous}}。现在时间是 {{now}}。',
      relatedMemoriesHeader: '以下是按相关性从高到低排列的记忆：',
      speakerToRecipient: '{{author}} 对 {{recipient}}：',
      worldNotFound: '世界 {{id}} 不存在',
      playerNotFound: '玩家 {{id}} 不存在',
      playerDescriptionNotFound: '未找到玩家 {{id}} 的描述',
      conversationNotFound: '未找到对话 {{id}}',
      agentDescriptionNotFound: '未找到智能体 {{id}} 的描述',
    },
    music: {
      invalidStorageId: '无效的存储 ID：{{id}}',
      noActiveDefaultWorld: '没有活跃的默认世界，已跳过。',
      backgroundPrompt: '16 位 RPG 冒险游戏风格，整体氛围温暖治愈',
      replicateTokenNotSet: '未设置 Replicate API Token',
    },
  },
} as const;

export default zhCN;
