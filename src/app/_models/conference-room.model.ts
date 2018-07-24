import { AVEquipment } from './avequipment.model';

export class ConferenceRoom {
    id: string;
    buildingNumber: string;
    roomName: string;
    roomNumber: string;
    maxOccupancy: number;
    availability: boolean;
    audioVisualEquipments: AVEquipment[];
    _link: {
        _self: { href: string };
        conferenceRoom: { href: string };
        reservations: { href: string };
    };
}
