import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { Ionicons } from '@expo/vector-icons'; // Ícones nativos do Expo

export default function ListScreen({ navigation }) {
    const [rentals, setRentals] = useState([]);
    const [expandedRentalId, setExpandedRentalId] = useState(null);
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
    const [rentalToDelete, setRentalToDelete] = useState(null);

    // Busca alugueis no Firestore
    const fetchRentals = async () => {
        const querySnapshot = await getDocs(collection(db, 'alugueis'));
        const rentalList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRentals(rentalList);
    };

    useEffect(() => {
        fetchRentals();
    }, []);

    const toggleDetails = (id) => {
        setExpandedRentalId(expandedRentalId === id ? null : id);
    };

    const confirmDelete = (rental) => {
        setRentalToDelete(rental);
        setModalDeleteVisible(true);
    };

    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, 'alugueis', rentalToDelete.id));
            setModalDeleteVisible(false);
            fetchRentals(); // Atualiza a lista
        } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir o aluguel.");
        }
    };

    const renderRental = ({ item }) => (
        <View style={styles.rentalCard}>
            <View style={styles.rentalMainRow}>
                <View>
                    <Text style={styles.rentalTitle}>{item.carName}</Text>
                    <Text style={styles.rentalSubtitle}>{item.clientName}</Text>
                </View>
                <View style={styles.iconGroup}>
                    <TouchableOpacity onPress={() => toggleDetails(item.id)}>
                        <Ionicons name={expandedRentalId === item.id ? "eye" : "eye-off"} size={24} color="#555" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => confirmDelete(item)}>
                        <Ionicons name="trash" size={24} color="#dc3545" />
                    </TouchableOpacity>
                </View>
            </View>

            {expandedRentalId === item.id && (
                <View style={styles.detailsBox}>
                    <Text>Nome do carro: {item.carName}</Text>
                    <Text>Nome do cliente: {item.clientName}</Text>
                    <Text>Valor do aluguel: {item.rentalValue}</Text>
                    <Text>Data do aluguel: {item.rentalDate}</Text>
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={rentals}
                keyExtractor={item => item.id}
                renderItem={renderRental}
            />

            {/* MODAL DE CONFIRMAÇÃO DE EXCLUSÃO */}
            <Modal visible={modalDeleteVisible} transparent animationType="slide">
                <View style={styles.modalBg}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Confirmar Exclusão</Text>
                        <Text>Deseja realmente excluir o aluguel de {rentalToDelete?.carName}?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity onPress={() => setModalDeleteVisible(false)} style={styles.cancelBtn}>
                                <Text>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleDelete} style={styles.deleteBtn}>
                                <Text style={{ color: '#fff' }}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
    rentalCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10, elevation: 2 },
    rentalMainRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    rentalTitle: { fontSize: 18, fontWeight: 'bold' },
    rentalSubtitle: { color: '#555', marginTop: 4 },
    iconGroup: { flexDirection: 'row' },
    detailsBox: { marginTop: 10, padding: 10, backgroundColor: '#eee', borderRadius: 5 },
    modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
    modalContent: { width: '80%', backgroundColor: '#fff', padding: 20, borderRadius: 10 },
    modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    modalButtons: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 },
    cancelBtn: { padding: 10, marginRight: 10 },
    deleteBtn: { backgroundColor: '#dc3545', padding: 10, borderRadius: 5 }
});