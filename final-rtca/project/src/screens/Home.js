import React, { useEffect } from 'react';
import Layout from '@components/global/Layout';
import RoomsList from '@components/home/RoomsList';
import { connect } from 'react-redux';
import { getRooms } from '@redux/actions/chat';

const Home = props => {
    const { getRooms, rooms } = props;

    useEffect(() => {
        getRooms();
    }, []);

    return (
        <Layout>
            <RoomsList 
                rooms={rooms}
            />
        </Layout>
    )
}

const mapStateToProps = ({
    chat
}) => ({
    rooms: chat.rooms
});
export default connect(mapStateToProps, { getRooms }) (Home);