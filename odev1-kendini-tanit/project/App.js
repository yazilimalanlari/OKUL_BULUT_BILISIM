import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './helpers/styles';

import Header from './components/Header';
import Info from './components/Info';
import WorkExperience from './components/WorkExperience';

const Profile = {
    fullName: 'Abdulbaki Zırıh',
    age: 21,
    highSchoolInfo: 'Açık lise mevzunu',
    homeland: 'Of/Trabzon',
    workExperience: 
`Yıllardır yazılım ile ilgileniyorum ve bu alanda kendimi geliştirmeye çalışıyorum.
Yıllar içerisinde farklı dil ve teknolojiler ile geliştirme yaptım bunlardan bazıları.

* PHP
* JavaScript(Node.js, NestJS, Vue.js, Nuxt.js, React.js)
* HTML5
* CSS3(SCSS)
* Java, Kotlin
* C, C++

Tabi bu dil ve teknolojilerin hepsine aynı derecede hakim değilim.
Daha çok web alanında kendimi geliştirdim.
Forum, E-Ticaret siteleri gibi çalışmalarım oldu/oluyor.
Ara sıra freelance işler alıyorum.

Kod yazmayı seviyorum...`
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    render() {
        const { fullName, age, highSchoolInfo, homeland, workExperience } = Profile;
        const { show, style } = this.state;

        return (
            <View style={Styles.page}>
                <Header 
                    fullName={fullName}
                    hide={show} />
                <Info 
                    age={age}
                    highSchoolInfo={highSchoolInfo}
                    homeland={homeland}
                />
                <Text 
                    style={Styles.pageButton}
                    onPress={() => this.setState({ show: true })}>İş Deneyimlerim</Text>
                
                <WorkExperience 
                    title="İş Deneyimlerim"
                    description={workExperience}
                    show={show}
                    close={() => this.setState({ show: false })}/>
            </View>
        );
    }
}


export default App;