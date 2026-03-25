import { useState } from "react";
import { Text, TouchableOpacity, View, Modal } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";
import { modalStyles } from "../../styles/modalStyles";

export default function ModalSlideScreen() {
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style={modalStyles.screenContainer}>
            <TouchableOpacity
                onPress={() => setVisible(true)}
                style={modalStyles.mainButton}
            >
                <Text style={modalStyles.buttonText}
                >Abrir Modal Slide</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
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
                        <Text style={modalStyles.modalTitle}>Animação Slide</Text>
                        <Text style={modalStyles.modalBody}>
                            Esta transição demonstra o comportamento nativo do tipo Slide.
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
