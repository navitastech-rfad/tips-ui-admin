import { TestBed, inject } from '@angular/core/testing';

import { ReserveConferenceRoomService } from './reserve-conference-room.service';

describe('ReserveConferenceRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReserveConferenceRoomService]
    });
  });

  it('should be created', inject([ReserveConferenceRoomService], (service: ReserveConferenceRoomService) => {
    expect(service).toBeTruthy();
  }));
});
