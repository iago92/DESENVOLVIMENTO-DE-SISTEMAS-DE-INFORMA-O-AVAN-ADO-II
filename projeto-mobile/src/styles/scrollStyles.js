import { StyleSheet } from "react-native";

export const flatStyles = StyleSheet.create({ 
  container: { 
    padding: 20, 
    marginTop: 20, 
  }, 
  item: { 
    marginBottom: 10, 
    padding: 20, 
    backgroundColor: '#e0f7fa', 
    borderRadius: 8, 
  }, 
  text: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  }, 
});


export const scrollStyles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
    },
    item: {
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
}) ;


export const sectionStyles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    list: {
        padding: 20,
        marginTop: 80,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#d0d0d0',
        padding: 10,
        borderRadius: 8,
    },
    item: {
        marginBottom: 10,
        padding: 15,
        backgroundColor: '#f9fbe7',
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
    },
}); 