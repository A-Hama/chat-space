class GroupsController < ApplicationController
  def new
    @group = Group.new
  end

  def create
    @group = Group.create(group_params)
    if @group.save
      redirect_to 
    else
      render :new
    end
  end

  def edit
  end

  def update
    @group = Group.update(group_params)
    if @group.save
      redirect_to
    else
      render :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name)
  end

end
