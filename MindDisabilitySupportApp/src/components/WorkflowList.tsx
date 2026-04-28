import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Workflow } from '../data/workflows';

interface WorkflowListProps {
  workflows: Workflow[];
  onSelectWorkflow: (workflow: Workflow) => void;
}

export const WorkflowList: React.FC<WorkflowListProps> = ({ 
  workflows, 
  onSelectWorkflow 
}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>选择工作流程</Text>
      <View style={styles.workflowContainer}>
        {workflows.map((workflow) => (
          <TouchableOpacity
            key={workflow.id}
            style={[styles.workflowCard, { borderLeftColor: workflow.color }]}
            onPress={() => onSelectWorkflow(workflow)}
            activeOpacity={0.7}
          >
            <View style={styles.workflowContent}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{workflow.icon}</Text>
              </View>
              <View style={styles.workflowInfo}>
                <Text style={styles.workflowTitle}>{workflow.title}</Text>
                <Text style={styles.workflowDescription}>{workflow.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  workflowContainer: {
    paddingHorizontal: 16,
  },
  workflowCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  workflowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 24,
  },
  workflowInfo: {
    flex: 1,
  },
  workflowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  workflowDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
});
