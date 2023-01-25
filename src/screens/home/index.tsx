import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

//APP E A FUNCAO PADRON DO JSX
export default function Home() {
    //AS FUNCOES ULTILIZADAS DENTRO DO COMPONENTE DEVEM SER CRIADAS DENTRO DO MESMO ESCOPO
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd() {
        if(participants.includes(participantName)){ 
            return Alert.alert('Participante ja existe','Usuario ja esta presente na lista!');
        }

        setParticipants(prevState => [...prevState, participantName.trim()]);
        setParticipantName('');
    };

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover participante', `Deseja remover o participante : ${name} ?`, [
            {
                text: 'sim',
                onPress: () => setParticipants(prevState => prevState.filter( part => part !== name.trim()))
            },
            {
                text: 'nao',
                style: 'cancel'
            }
        ]);
    };

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}>
                Nome do Evento!
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de novembro de 2022
            </Text>


            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={e => setParticipantName(e)}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>


            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                        <Participant 
                            key={item}
                            name={item} 
                            onRemove={() => handleParticipantRemove(item)}
                        />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguem chegou no evento ainda ? Adicione participantes a sua lista.
                    </Text>
                )}
            />
            
        </View>
    );
};