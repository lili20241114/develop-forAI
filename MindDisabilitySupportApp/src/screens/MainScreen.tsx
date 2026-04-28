import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
  Animated
} from 'react-native';
import { WorkflowList } from '../components/WorkflowList';
import { WorkflowDetail } from '../components/WorkflowDetail';
import { CommunicationAssistant } from '../components/CommunicationAssistant';
import { workflows } from '../data/workflows';
import { communicationCards, communicationTemplates } from '../data/communication';
import { Workflow } from '../data/workflows';

const MainScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workflow' | 'communication'>('workflow');
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [activeTab, selectedWorkflow]);

  const handleSelectWorkflow = (workflow: Workflow) => {
    setSelectedWorkflow(workflow);
    setCurrentStepIndex(0);
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleNextStep = () => {
    if (selectedWorkflow && currentStepIndex < selectedWorkflow.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleVoicePrompt = () => {
    Alert.alert('语音提示', '正在播放语音提示...');
  };

  const handleViewImage = () => {
    Alert.alert('查看图片', '正在显示步骤图片...');
  };

  const handleHelp = () => {
    Alert.alert('帮助', '如有疑问，请咨询现场支持人员。');
  };

  const handleSelectItem = (text: string) => {
    Alert.alert('选择项目', `您选择了: ${text}`);
  };

  const handleSelectTemplate = (message: string) => {
    Alert.alert('选择模板', `您选择了: ${message}`);
  };

  return (
    <View style={styles.container}>
      {/* 应用头部 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {activeTab === 'workflow' ? '工作流程助手' : '沟通辅助工具'}
        </Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* 应用内容 */}
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        {activeTab === 'workflow' ? (
          selectedWorkflow ? (
            <WorkflowDetail
              workflow={selectedWorkflow}
              currentStepIndex={currentStepIndex}
              onPrevStep={handlePrevStep}
              onNextStep={handleNextStep}
              onVoicePrompt={handleVoicePrompt}
              onViewImage={handleViewImage}
              onHelp={handleHelp}
            />
          ) : (
            <WorkflowList
              workflows={workflows}
              onSelectWorkflow={handleSelectWorkflow}
            />
          )
        ) : (
          <CommunicationAssistant
            communicationCards={communicationCards}
            communicationTemplates={communicationTemplates}
            onSelectItem={handleSelectItem}
            onSelectTemplate={handleSelectTemplate}
          />
        )}
      </Animated.View>

      {/* 底部导航 */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerItem, activeTab === 'workflow' && styles.footerItemActive]}
          onPress={() => {
            setActiveTab('workflow');
            setSelectedWorkflow(null);
          }}
        >
          <Text style={[styles.footerIcon, activeTab === 'workflow' && styles.footerIconActive]}>🏠</Text>
          <Text style={[styles.footerText, activeTab === 'workflow' && styles.footerTextActive]}>工作流程</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerItem, activeTab === 'communication' && styles.footerItemActive]}
          onPress={() => setActiveTab('communication')}
        >
          <Text style={[styles.footerIcon, activeTab === 'communication' && styles.footerIconActive]}>💬</Text>
          <Text style={[styles.footerText, activeTab === 'communication' && styles.footerTextActive]}>沟通辅助</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerIcon}>👤</Text>
          <Text style={styles.footerText}>我的</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#3B82F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  settingsButton: {
    padding: 8,
  },
  settingsIcon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  footerItemActive: {
    // 激活状态样式
  },
  footerIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  footerIconActive: {
    color: '#3B82F6',
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280',
  },
  footerTextActive: {
    color: '#3B82F6',
    fontWeight: '500',
  },
});

export default MainScreen;
