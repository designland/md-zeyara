export interface DrModel {
  shortBio: string;
  npi?: any;
  spokenLanguages?: any;
  specialityName?: any;
  zoomUserId?: any;
  doctorAddress?: any;
  doctorPhoneNumber?: any;
  doctorLicenseList?: any;
  doctorUniversityList: DoctorUniversityList[];
  doctorSpecialityList: DoctorSpecialityList[];
  parent?: any;
  parentId?: any;
  assistantDoctors: any[];
  prefix: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  dateofBirth: string;
  avatarUrl: string;
  id: string;
  createdOn: string;
  updatedOn?: any;
  lastAccessed: string;
  isActive: boolean;
}

export interface DoctorSpecialityList {
  id: number;
  specialityName: string;
  doctorId: string;
}

export interface DoctorUniversityList {
  id: number;
  universityName: string;
  universityImageUrl: string;
  doctorId: string;
}
