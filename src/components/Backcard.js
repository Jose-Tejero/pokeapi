import React from 'react';

const Backcard = ({pokemon}) => {

    const choose = pokemon.types?.[0].type?.name;

    const type = {
        water: `url(https://us.123rf.com/450wm/fotoru/fotoru1605/fotoru160500040/58632737-alta-resoluci%C3%B3n-humo-azul-sobre-fondo-negro.jpg?ver=6)`,
        poison: `url(https://us.123rf.com/450wm/peterkai/peterkai1504/peterkai150400096/38393164-green-humo-.jpg?ver=6)`,
        grass: `url(https://us.123rf.com/450wm/vagengeym/vagengeym1605/vagengeym160500187/56490290-arte-abstracto-humo-verde-de-los-varitas-de-incienso-sobre-un-fondo-blanco-.jpg?ver=6)`,
        rock: `url(https://us.123rf.com/450wm/nneirda/nneirda1310/nneirda131000172/22666612-humo-gris-en-el-fondo-negro.jpg?ver=6)`,
        bug: `url(https://i.pinimg.com/474x/df/c9/6c/dfc96cfbba76aa6b2758640cab268db6.jpg)`,
        electric: `url(https://us.123rf.com/450wm/schan/schan1401/schan140101749/25233503-humo-amarillo-sobre-un-fondo-negro.jpg?ver=6)`,
        ghost: `url(https://us.123rf.com/450wm/joytasa/joytasa1706/joytasa170600074/80258028-es-aislado-humo-blanco-en-la-extinci%C3%B3n.jpg?ver=6)`,
        ground: `url(https://us.123rf.com/450wm/yakuzakorat/yakuzakorat1106/yakuzakorat110600403/14005651-fumar.jpg?ver=6)`,
        fire: `url(https://us.123rf.com/450wm/backgroundcreator/backgroundcreator1808/backgroundcreator180801699/106070993-humo-rojo-resumen-sobre-fondo-negro.jpg?ver=6)`,
        normal: `url(https://us.123rf.com/450wm/dwiedemann/dwiedemann1205/dwiedemann120500025/13732977-una-fotograf%C3%ADa-de-humo-negro-sobre-un-fondo-blanco-.jpg?ver=6)`,
        fighting: `url(https://us.123rf.com/450wm/lucielang/lucielang1303/lucielang130300003/18280680-rainbow-patr%C3%B3n-de-humo-de-colores-sobre-fondo-blanco.jpg?ver=6)`,
        fairy: `url(https://us.123rf.com/450wm/sniper762/sniper7621502/sniper762150200114/36567365-imagen-de-color-humo-sobre-un-fondo-negro-otras-im%C3%A1genes-en-mi-cartera.jpg?ver=6)`,
        psychic: `url(https://us.123rf.com/450wm/peterkai/peterkai1711/peterkai171100353/90627862-humo-p%C3%BArpura-t%C3%B3xico-.jpg?ver=6)`,
        ice: `url(https://us.123rf.com/450wm/phloxii/phloxii1403/phloxii140300330/41670285-humo-azul-forma-libre-patr%C3%B3n-en-el-fondo-blanco.jpg?ver=6)`,
        dark: `url(https://us.123rf.com/450wm/rangsan2526/rangsan25261507/rangsan2526150700012/43224161-formas-extra%C3%B1as-de-humo-de-incienso-sobre-un-fondo-negro-.jpg?ver=6)`,
        dragon: `url(https://us.123rf.com/450wm/mareandmare/mareandmare1201/mareandmare120100062/12332559-dos-l%C3%ADnea-ondulada-colorido-de-humo-que-se-levantan-hacia-arriba-.jpg?ver=6)`,
        steel: `url(https://us.123rf.com/450wm/peterkai/peterkai1509/peterkai150900399/44882789-magia-negro-en-la-mano-con-humo-en-el-cr%C3%A1neo-.jpg?ver=6)`,        
    }

    const styles = {
        textAlign: "center",
        width: "300px",
        height: "450px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "10px 10px 20px #000",
        backgroundImage: type[choose],
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: "center",
        position: "relative",
        borderRadius: "25px",
        color: "rgb(255, 255, 255)",
        paddingTop: "5px",
    }
    console.log(pokemon)

    return (
        <div className='border-text' style={styles} >            
            <h1>{pokemon.name}</h1>
            <div className='pokeball' ></div>
            <div className="datas">
                <label className='progress' htmlFor="file">File progress:</label>
                <progress id="file" max="100" value="70"> 70% </progress>
            </div>
            <img className='figure2' src={pokemon.sprites?.other?.["home"]?.front_default} alt="" />
        </div>
    );
};

export default Backcard;
