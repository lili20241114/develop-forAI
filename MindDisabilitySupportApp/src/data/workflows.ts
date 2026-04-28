export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  tip: string;
  icon?: string;
}

export interface Workflow {
  id: string;
  title: string;
  description: string;
  level: '基础级' | '进阶级' | '高级';
  steps: WorkflowStep[];
  icon: string;
  color: string;
}

export const workflows: Workflow[] = [
  {
    id: 'packaging',
    title: '包装工',
    description: '商品包装流程',
    level: '基础级',
    icon: '📦',
    color: '#3B82F6',
    steps: [
      {
        id: 1,
        title: '准备包装材料',
        description: '检查并准备所需的包装材料，包括盒子、胶带、填充物等。',
        tip: '确保所有材料都已准备就绪，避免工作过程中中断。',
        icon: '📋'
      },
      {
        id: 2,
        title: '放置商品',
        description: '将商品放入包装盒中，确保放置正确且稳固。',
        tip: '轻轻放置商品，避免损坏。',
        icon: '📥'
      },
      {
        id: 3,
        title: '添加填充物',
        description: '在商品周围添加适当的填充物，防止运输过程中损坏。',
        tip: '确保填充物足够，但不要过度填充。',
        icon: '🧽'
      },
      {
        id: 4,
        title: '密封包装',
        description: '使用胶带密封包装盒，确保包装牢固。',
        tip: '确保胶带粘贴平整，没有气泡。',
        icon: '📄'
      },
      {
        id: 5,
        title: '检查质量',
        description: '检查包装是否牢固，标签是否正确。',
        tip: '确保所有标签清晰可见，信息准确。',
        icon: '✅'
      }
    ]
  },
  {
    id: 'cleaning',
    title: '清洁工',
    description: '办公室清洁流程',
    level: '基础级',
    icon: '🧹',
    color: '#10B981',
    steps: [
      {
        id: 1,
        title: '准备清洁工具',
        description: '检查并准备所需的清洁工具，包括拖把、扫帚、抹布等。',
        tip: '确保工具干净，功能正常。',
        icon: '🧰'
      },
      {
        id: 2,
        title: '清扫地面',
        description: '使用扫帚清扫地面，收集垃圾。',
        tip: '注意角落和不易清洁的地方。',
        icon: '🧹'
      },
      {
        id: 3,
        title: '擦拭表面',
        description: '使用抹布擦拭桌面、椅子、窗户等表面。',
        tip: '使用适当的清洁剂，避免损坏表面。',
        icon: '🪣'
      },
      {
        id: 4,
        title: '拖地',
        description: '使用拖把清洁地面。',
        tip: '确保地面彻底清洁，没有水渍。',
        icon: '🧽'
      },
      {
        id: 5,
        title: '清理垃圾',
        description: '将垃圾倒入垃圾桶，确保环境整洁。',
        tip: '垃圾分类投放，保持垃圾桶清洁。',
        icon: '🗑️'
      }
    ]
  },
  {
    id: 'organizing',
    title: '整理员',
    description: '仓库整理流程',
    level: '进阶级',
    icon: '📦',
    color: '#F59E0B',
    steps: [
      {
        id: 1,
        title: '了解整理需求',
        description: '了解仓库的整理要求和标准。',
        tip: '与主管确认整理目标和优先级。',
        icon: '📋'
      },
      {
        id: 2,
        title: '分类物品',
        description: '根据物品类型、用途等进行分类。',
        tip: '建立清晰的分类标准，便于后续查找。',
        icon: '🏷️'
      },
      {
        id: 3,
        title: '整理货架',
        description: '将物品整齐地摆放在货架上。',
        tip: '重物放在底层，轻物放在上层。',
        icon: '📚'
      },
      {
        id: 4,
        title: '标记位置',
        description: '为物品位置添加标签，便于查找。',
        tip: '标签清晰可见，信息准确。',
        icon: '🏷️'
      },
      {
        id: 5,
        title: '记录 inventory',
        description: '记录整理后的物品数量和位置。',
        tip: '确保记录准确，便于后续管理。',
        icon: '📝'
      }
    ]
  }
];
