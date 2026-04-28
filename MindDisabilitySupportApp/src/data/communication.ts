export interface CommunicationCard {
  id: string;
  title: string;
  items: CommunicationItem[];
}

export interface CommunicationItem {
  id: string;
  text: string;
  icon: string;
}

export interface CommunicationTemplate {
  id: string;
  title: string;
  messages: string[];
}

export const communicationCards: CommunicationCard[] = [
  {
    id: 'emotions',
    title: '情绪卡片',
    items: [
      { id: 'happy', text: '开心', icon: '😊' },
      { id: 'sad', text: '难过', icon: '😢' },
      { id: 'angry', text: '生气', icon: '😠' },
      { id: 'tired', text: '疲惫', icon: '😴' }
    ]
  },
  {
    id: 'needs',
    title: '需求卡片',
    items: [
      { id: 'water', text: '喝水', icon: '💧' },
      { id: 'toilet', text: '上厕所', icon: '🚽' },
      { id: 'food', text: '吃饭', icon: '🍎' },
      { id: 'rest', text: '休息', icon: '🛏️' }
    ]
  },
  {
    id: 'workStatus',
    title: '工作状态卡片',
    items: [
      { id: 'completed', text: '完成', icon: '✅' },
      { id: 'help', text: '需要帮助', icon: '🆘' },
      { id: 'pause', text: '暂停', icon: '⏸️' },
      { id: 'question', text: '疑问', icon: '❓' }
    ]
  }
];

export const communicationTemplates: CommunicationTemplate[] = [
  {
    id: 'packaging',
    title: '包装工沟通模板',
    messages: [
      '我需要包装材料',
      '这个产品怎么包装？',
      '包装完成了',
      '需要帮助'
    ]
  },
  {
    id: 'cleaning',
    title: '清洁工沟通模板',
    messages: [
      '清洁工具在哪里？',
      '这个地方需要清洁',
      '清洁完成了',
      '需要更换清洁用品'
    ]
  },
  {
    id: 'organizing',
    title: '整理员沟通模板',
    messages: [
      '这些物品放在哪里？',
      '整理完成了',
      '需要更多空间',
      '物品分类标签在哪里？'
    ]
  }
];

export const commonSymbols: CommunicationItem[] = [
  { id: 'hello', text: '你好', icon: '👋' },
  { id: 'thank', text: '谢谢', icon: '🙏' },
  { id: 'sorry', text: '对不起', icon: '道歉' },
  { id: 'help', text: '帮助', icon: '🆘' },
  { id: 'yes', text: '是', icon: '👍' },
  { id: 'no', text: '否', icon: '👎' }
];
