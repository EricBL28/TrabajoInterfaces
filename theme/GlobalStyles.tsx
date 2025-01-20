import { StyleSheet } from "react-native"

export const Colores = {
    azul: "#366288",
    blanco:"#ffff"

}

export const GlobalStyles = StyleSheet.create({
    containerAzul:{
        backgroundColor:Colores.azul,
        height:"100%"
    },

    containerBlanco:{
        
        borderRadius: 32,
        backgroundColor:Colores.blanco,
        height:"70%"
    },
    logo: {
        width: 80,
        height:80,
        left:"80%",
    },
    textoTitulo:{
        fontSize:35

    },
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 22
    },
    drawerUserContainer: {
        backgroundColor: 'indigo',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 0,
        marginBottom: 30,
        height: 140,
        borderRadius: 10,

    },
    drawerUserImg: {
        width: 100, 
        height: 100, 
        alignSelf:'center', 
        borderRadius: 50
    }
})