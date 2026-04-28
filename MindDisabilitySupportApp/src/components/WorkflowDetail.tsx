import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Workflow, WorkflowStep } from '../data/workflows';

interface WorkflowDetailProps {
  workflow: Workflow;
  currentStepIndex: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  onVoicePrompt: () => void;
  onViewImage: () => void;
  onHelp: () => void;
}

export const WorkflowDetail: React.FC<WorkflowDetailProps> = ({
  workflow,
  currentStepIndex,
  onPrevStep,
  onNextStep,
  onVoicePrompt,
  onViewImage,
  onHelp
}) => {
  const currentStep = workflow.steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / workflow.steps.length) * 100;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 工作流程标题 */}
      <View style={styles.header}>
        <Text style={styles.title}>{workflow.title}工作流程</Text>
        <View style={[styles.levelBadge, { backgroundColor: workflow.color + '20' }]}>
          <Text style={[styles.levelText, { color: workflow.color }]}>{workflow.level}</Text>
        </View>
      </View>

      {/* 当前步骤 */}
      <View style={styles.stepCard}>
        <View style={styles.stepHeader}>
          <View style={[styles.stepNumber, { backgroundColor: workflow.color }]}>
            <Text style={styles.stepNumberText}>{currentStep.id}</Text>
          </View>
          <Text style={styles.stepTitle}>{currentStep.title}</Text>
        </View>
        <Text style={styles.stepDescription}>{currentStep.description}</Text>
        <View style={[styles.tipBox, { backgroundColor: workflow.color + '10' }]}>
          <Text style={[styles.tipText, { color: workflow.color }]}>提示：{currentStep.tip}</Text>
        </View>
      </View>

      {/* 进度条 */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressTitle}>工作进度</Text>
        <View style={styles.progressBar}>
          <View 
            style={[styles.progressFill, { backgroundColor: workflow.color, width: `${progress}%` }]} 
          />
        </View>
        <View style={styles.progressInfo}>
          <Text style={styles.progressText}>步骤 {currentStepIndex + 1}/{workflow.steps.length}</Text>
          <Text style={styles.progressText}>{Math.round(progress)}% 完成</Text>
        </View>
      </View>

      {/* 步骤导航 */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[styles.navButton, styles.prevButton, currentStepIndex === 0 && styles.disabledButton]}
          onPress={onPrevStep}
          disabled={currentStepIndex === 0}
        >
          <Text style={[styles.navButtonText, currentStepIndex === 0 && styles.disabledButtonText]}>上一步</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, styles.nextButton, currentStepIndex === workflow.steps.length - 1 && styles.disabledButton]}
          onPress={onNextStep}
          disabled={currentStepIndex === workflow.steps.length - 1}
        >
          <Text style={[styles.navButtonText, styles.nextButtonText, currentStepIndex === workflow.steps.length - 1 && styles.disabledButtonText]}>下一步</Text>
        </TouchableOpacity>
      </View>

      {/* 辅助功能 */}
      <View style={styles.helperContainer}>
        <TouchableOpacity style={styles.helperButton} onPress={onVoicePrompt}>
          <Text style={styles.helperIcon}>🔊</Text>
          <Text style={styles.helperText}>语音提示</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helperButton} onPress={onViewImage}>
          <Text style={styles.helperIcon}>🖼️</Text>
          <Text style={styles.helperText}>查看图片</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helperButton} onPress={onHelp}>
          <Text style={styles.helperIcon}>❓</Text>
          <Text style={styles.helperText}>帮助</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  levelBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  levelText: {
    fontSize: 14,
    fontWeight: '500',
  },
  stepCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  tipBox: {
    padding: 12,
    borderRadius: 6,
  },
  tipText: {
    fontSize: 14,
    fontWeight: '500',
  },
  progressContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressText: {
    fontSize: 12,
    color: '#6B7280',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  navButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  prevButton: {
    backgroundColor: '#E5E7EB',
  },
  nextButton: {
    backgroundColor: '#3B82F6',
  },
  disabledButton: {
    opacity: 0.5,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  nextButtonText: {
    color: '#FFFFFF',
  },
  disabledButtonText: {
    color: '#9CA3AF',
  },
  helperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  helperButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  helperIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  helperText: {
    fontSize: 12,
    color: '#374151',
  },
});
