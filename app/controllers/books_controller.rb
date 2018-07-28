class BooksController < ApplicationController

  def index
    @books = Book.all
    respond_to do |f|
      f.json { render json: @books }
    end
  end

  def show
    @book = Book.find(params[:id])
    respond_to do |f|
      f.json { render json: @book }
    end
  end

  def create
    @book = Book.new(book_params)
    @book.author = params[:author].join(", ")
    @book.categories = params[:categories].join(", ")
    if @book.save
      respond_to do |f|
        f.json { render json: @book }
      end
    end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
  end

  private

  def book_params
    params.permit(:id, :title, :description)
  end

end
