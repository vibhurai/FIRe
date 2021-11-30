import { Complaint } from '../interfaces/complaint.interface';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ComplaintService {
  constructor(
    @InjectModel('Complaint') private readonly compaintModel: Model<Complaint>,
  ) {}

  public async getComplaint(): Promise<Complaint[]> {
    try {
      return await this.compaintModel.find();
    } catch (error) {
      return error;
    }
  }

  public async postComplaint(complaint: Complaint): Promise<Complaint> {
    const newComplaint = new this.compaintModel(complaint);
    try {
      return await newComplaint.save();
    } catch (error) {
      return error;
    }
  }

  public async getComplaintById(id: string): Promise<Complaint> {
    try {
      return await this.compaintModel.findOne({ _id: id });
    } catch (error) {
      return error;
    }
  }

  public async deleteComplaintById(id: string): Promise<Complaint> {
    try {
      return await this.compaintModel.findByIdAndRemove(id);
    } catch (error) {
      return error;
    }
  }

  public async findById(id: String): Promise<Complaint> {
    const complaint = await this.compaintModel.findOne({ _id: id });
    return complaint;
  }

  public async putComplaintById_review(
    id: string,
    // complaint: Complaint,
  ): Promise<JSON> {
    var complaint = await this.findById(id);

    if (complaint) {
      try {
        complaint.status = 'Under Review';

        await this.compaintModel.findByIdAndUpdate(id, complaint, {
          new: true,
        });

        var res = { message: 'complaint filed under review!' };

        return JSON.parse(JSON.stringify(res));
      } catch (error) {
        return error;
      }
    } else {
      var res = { message: 'complaint not present in database!' };

      return JSON.parse(JSON.stringify(res));
    }
  }

  public async putComplaintById_submit(
    id: string,
    // complaint: Complaint,
  ): Promise<JSON> {
    var complaint = await this.findById(id);

    if (complaint) {
      try {
        complaint.status = 'FIR lodged';

        await this.compaintModel.findByIdAndUpdate(id, complaint, {
          new: true,
        });

        var res = { message: 'complaint filed as FIR!' };

        return JSON.parse(JSON.stringify(res));
      } catch (error) {
        return error;
      }
    } else {
      var res = { message: 'complaint not present in database!' };

      return JSON.parse(JSON.stringify(res));
    }
  }
}
