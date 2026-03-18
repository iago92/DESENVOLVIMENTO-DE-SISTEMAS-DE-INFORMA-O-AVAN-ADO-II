import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/modalStyles";

export default function ModalNoneScreen() {
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style={styles.screenContainer}>
            <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.mainButton}
            >
                <Text style={styles.buttonText}
                >Abrir Modal None</Text>
            </TouchableOpacity>

            <Modal
                animationtype="none"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPressOut={() => setVisible(false)}
                >
                    <View style={styles.modalCard}>
                        <Text style={styles.modalBody}>
                            Esta transição demonstra o comportamento nativo do tipo "slide".
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.closeButton}
                    onPressOut={() => setVisible(false)}
                >
                    <Text>Fechando Modal</Text>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}
