import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Medicos } from "../mock/data";
import { Link } from "expo-router";
import { styles } from "../styles/medicos";
import { Medico } from "../types/Medico";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteMedico } from "../functions/functions";

export default function Index() {
  const [medicos, setMedicos] = useState<any>(Medicos);

  const handleDelete = (id: number) => {
    let medicosUpdated = deleteMedico(medicos, id);
    setMedicos(medicosUpdated);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>DSW - POC Expo React Native</Text>
        <Text style={styles.subtitle}>Lista de médicos</Text>
        <View style={styles.grid}>
          {medicos.length ? (
            medicos.map((medico, index) => (
              <View key={index} style={styles.medicoCard}>
                <Text style={styles.medicoName}>
                  {medico.nombre} {medico.apellido}
                </Text>
                <Text style={styles.medicoDetails}>
                  Matricula: {medico.matricula}
                </Text>
                <Text style={styles.medicoDetails}>
                  Especialidad: {medico.especialidad.nombre}
                </Text>
                <Text style={styles.medicoDetails}>
                  Días de Atención: {medico.diasAtencion.join(", ")}
                </Text>
                <Text style={styles.medicoDetails}>
                  Horario: {medico.horaInicio} - {medico.horaFin}
                </Text>
                <Text style={styles.medicoDetails}>DNI: {medico.dni}</Text>
                <MaterialCommunityIcons
                  style={styles.trash}
                  onPress={() => handleDelete(medico.id)}
                  name="trash-can"
                  size={30}
                  color="red"
                />
              </View>
            ))
          ) : (
            <Text>No hay médicos para mostrar.</Text>
          )}
        </View>
      </View>
      <Link href={`/especialidades/`} style={styles.button}>
        <Text style={styles.buttonText}>Ver especialidades</Text>
      </Link>
    </View>
  );
}
