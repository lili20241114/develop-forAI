import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { CommunicationCard, CommunicationTemplate, commonSymbols } from '../data/communication';

interface CommunicationAssistantProps {
  communicationCards: CommunicationCard[];
  communicationTemplates: CommunicationTemplate[];
  onSelectItem: (text: string) => void;
  onSelectTemplate: (message: string) => void;
}

export const CommunicationAssistant: React.FC<CommunicationAssistantProps> = ({
  communicationCards,
  communicationTemplates,
  onSelectItem,
  onSelectTemplate
}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 视觉化沟通卡片 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>视觉化沟通卡片</Text>
        {communicationCards.map((card) => (
          <View key={card.id} style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <View style={styles.cardItems}>
              {card.items.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.cardItem}
                  onPress={() => onSelectItem(item.text)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.itemIcon}>{item.icon}</Text>
                  <Text style={styles.itemText}>{item.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* 符号选择器 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>常用符号</Text>
        <FlatList
          data={commonSymbols}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.symbolItem}
              onPress={() => onSelectItem(item.text)}
              activeOpacity={0.7}
            >
              <Text style={styles.symbolIcon}>{item.icon}</Text>
              <Text style={styles.symbolText}>{item.text}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.symbolList}
        />
      </View>

      {/* 沟通模板 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>沟通模板</Text>
        {communicationTemplates.map((template) => (
          <View key={template.id} style={styles.templateContainer}>
            <Text style={styles.templateTitle}>{template.title}</Text>
            <View style={styles.templateMessages}>
              {template.messages.map((message, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.templateMessage}
                  onPress={() => onSelectTemplate(message)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.messageText}>{message}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#3B82F6',
  },
  cardItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  cardItem: {
    width: '50%',
    paddingHorizontal: 4,
    marginBottom: 12,
  },
  itemIcon: {
    fontSize: 32,
    marginBottom: 4,
    textAlign: 'center',
  },
  itemText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#374151',
  },
  symbolList: {
    paddingHorizontal: 16,
  },
  symbolItem: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 80,
  },
  symbolIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  symbolText: {
    fontSize: 12,
    color: '#374151',
  },
  templateContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  templateTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#3B82F6',
  },
  templateMessages: {
    gap: 8,
  },
  templateMessage: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
  },
  messageText: {
    fontSize: 14,
    color: '#374151',
  },
});
