import { useState } from "react";
import { Text, TouchableOpacity, View, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { modalStyles } from "../../styles/modalStyles";

export default function ModalFadeScreen() {
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style={modalStyles.screenContainer}>
            <TouchableOpacity
                onPress={() => setVisible(true)}
                style={modalStyles.mainButton}
            >
                <Text style={modalStyles.buttonText}
                >Abrir Modal Fade</Text>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <TouchableOpacity
                    style={modalStyles.modalOverlay}
                    activeOpacity={1}
                    onPressOut={() => setVisible(false)}
                >
                    <View style={modalStyles.modalCard}>
                        <Text style={modalStyles.modalTitle}>Animação Fade</Text>
                        <Text style={modalStyles.modalBody}>
                            Esta transição demonstra o comportamento nativo do tipo Fade.
                        </Text>
                        <TouchableOpacity
                            style={modalStyles.closeButton}
                            onPress={() => setVisible(false)}
                        >
                            <Text style={modalStyles.closeButtonText}>FECHAR</Text>
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}
